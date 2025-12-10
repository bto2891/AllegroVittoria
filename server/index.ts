import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { setupVite, serveStatic, log } from "./vite";

const app = express();

declare module 'http' {
  interface IncomingMessage {
    rawBody: unknown
  }
}
app.use(express.json({
  verify: (req, _res, buf) => {
    req.rawBody = buf;
  }
}));
app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      if (logLine.length > 80) {
        logLine = logLine.slice(0, 79) + "…";
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  const server = await registerRoutes(app);

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (app.get("env") === "development") {
    await setupVite(app, server);
  } else {
    serveStatic(app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
    const port = parseInt(process.env.PORT || '5000', 10);

    // Some platforms (or Node builds) emit an 'error' event when unsupported
    // options (like reusePort) are used. server.listen does not throw in that
    // case, so a try/catch is insufficient. Attach a one-time error handler to
    // catch ENOTSUP and retry without reusePort.
    const tryListenWithReuse = () => {
      const onError = (err: any) => {
        // If reusePort is not supported, retry without it.
        if (err && err.code === "ENOTSUP") {
          log("reusePort not supported on this platform; retrying without reusePort");
          server.off("error", onError);
          // Retry without reusePort
          server.listen({ port, host: "0.0.0.0" }, () => {
            log(`serving on port ${port}`);
          });
        } else {
          // Remove listener and re-emit/exit so we don't swallow unexpected errors
          server.off("error", onError);
          log(`server listen error: ${err?.message || err}`);
          // Let the process crash so the caller / supervisor can handle restarts.
          process.nextTick(() => {
            throw err;
          });
        }
      };

      server.once("error", onError);

      server.listen({ port, host: "0.0.0.0", reusePort: true }, () => {
        server.off("error", onError);
        log(`serving on port ${port}`);
      });
    };

    tryListenWithReuse();
})();
