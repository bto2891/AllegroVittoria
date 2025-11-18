import { useEffect, useRef, useState } from "react";
import { MapPin, Navigation } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Location() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.2 }
    );

    const currentRef = sectionRef.current;
    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef);
      }
      observer.disconnect();
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      id="ubicacion"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">
              UBICACIÓN
            </span>
          </div>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-location-title"
          >
            Encuéntranos
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Ubicados estratégicamente en Juriquilla, a solo una cuadra de la
            autopista 57
          </p>
        </div>

        <div
          className={`grid lg:grid-cols-3 gap-8 mb-8 transition-all duration-700 ${
            isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
          }`}
        >
          <Card className="lg:col-span-2 p-0 overflow-hidden hover-elevate">
            <div className="aspect-[16/9] lg:aspect-[2/1]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3733.1234567890!2d-100.4567890!3d20.6234567!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjDCsDM3JzI0LjQiTiAxMDDCsDI3JzI0LjQiVw!5e0!3m2!1ses!2smx!4v1234567890"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Ubicación de Allegro Vittoria en Google Maps"
              />
            </div>
          </Card>

          <div className="space-y-6">
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <MapPin className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Dirección
                  </h3>
                  <p
                    className="text-sm text-muted-foreground leading-relaxed"
                    data-testid="text-address"
                  >
                    Blvd. Villas del Mesón 2998-Local 10
                    <br />
                    Jurica Acueducto
                    <br />
                    76226 Juriquilla, Qro.
                    <br />
                    México
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Navigation className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-2">
                    Cómo Llegar
                  </h3>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    Ubicados a solo una cuadra de la autopista 57, en la zona de
                    Juriquilla. Fácil acceso desde cualquier punto de Querétaro.
                  </p>
                </div>
              </div>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
