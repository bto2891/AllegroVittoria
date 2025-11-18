import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { insertReservationSchema } from "@shared/schema";
import { fromZodError } from "zod-validation-error";

export async function registerRoutes(app: Express): Promise<Server> {
  app.post("/api/reservations", async (req, res) => {
    try {
      const validatedData = insertReservationSchema.parse(req.body);
      const reservation = await storage.createReservation(validatedData);
      
      res.status(201).json({
        message: "Reservación creada exitosamente",
        reservation,
      });
    } catch (error: any) {
      if (error.name === "ZodError") {
        const validationError = fromZodError(error);
        return res.status(400).json({
          message: "Error de validación",
          error: validationError.message,
        });
      }
      
      console.error("Error creating reservation:", error);
      res.status(500).json({
        message: "Error al crear la reservación",
        error: error.message,
      });
    }
  });

  app.get("/api/reservations", async (_req, res) => {
    try {
      const reservations = await storage.getReservations();
      res.json(reservations);
    } catch (error: any) {
      console.error("Error fetching reservations:", error);
      res.status(500).json({
        message: "Error al obtener las reservaciones",
        error: error.message,
      });
    }
  });

  app.get("/api/reservations/:id", async (req, res) => {
    try {
      const { id } = req.params;
      const reservation = await storage.getReservation(id);
      
      if (!reservation) {
        return res.status(404).json({
          message: "Reservación no encontrada",
        });
      }
      
      res.json(reservation);
    } catch (error: any) {
      console.error("Error fetching reservation:", error);
      res.status(500).json({
        message: "Error al obtener la reservación",
        error: error.message,
      });
    }
  });

  const httpServer = createServer(app);

  return httpServer;
}
