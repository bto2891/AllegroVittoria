import { useEffect, useRef, useState } from "react";
import aboutImage from "@assets/generated_images/Elegant_wedding_reception_hall_379581a6.png";

export function About() {
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
      id="sobre-nosotros"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div
            className={`transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <div className="relative aspect-[4/3] rounded-md overflow-hidden">
              <img
                src={aboutImage}
                alt="Elegante salón de eventos Allegro Vittoria"
                className="w-full h-full object-cover"
                data-testid="img-about-venue"
              />
              <div className="absolute inset-0 border-2 border-primary/30 rounded-md" />
            </div>
          </div>

          <div
            className={`transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
              <span className="text-primary font-semibold text-sm">
                SOBRE NOSOTROS
              </span>
            </div>
            <h2
              className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-6"
              data-testid="text-about-title"
            >
              Un Espacio Diseñado para Celebrar
            </h2>
            <div className="w-20 h-1 bg-primary mb-6" />
            <p
              className="text-lg text-muted-foreground mb-6 leading-relaxed"
              data-testid="text-about-description"
            >
              En Allegro Vittoria transformamos cada evento en una experiencia
              inolvidable. Ubicados en Juriquilla, Querétaro, nuestro salón
              combina elegancia, versatilidad y atención personalizada para que
              tu celebración sea perfecta.
            </p>
            <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
              Con capacidad para eventos de diversos tamaños, nuestro equipo se
              dedica a crear el ambiente ideal que refleje la esencia única de
              cada celebración.
            </p>
            <div className="grid grid-cols-2 gap-6 mt-8">
              <div className="border-l-4 border-primary pl-4">
                <p className="font-serif text-3xl font-bold text-primary mb-1">
                  10+
                </p>
                <p className="text-sm text-muted-foreground">
                  Años de Experiencia
                </p>
              </div>
              <div className="border-l-4 border-primary pl-4">
                <p className="font-serif text-3xl font-bold text-primary mb-1">
                  500+
                </p>
                <p className="text-sm text-muted-foreground">
                  Eventos Realizados
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
