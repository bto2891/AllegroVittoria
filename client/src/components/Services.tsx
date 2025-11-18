import { useEffect, useRef, useState } from "react";
import { Heart, Briefcase, PartyPopper } from "lucide-react";
import { Card } from "@/components/ui/card";

export function Services() {
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

  const services = [
    {
      icon: Heart,
      title: "Bodas y Ceremonias",
      description:
        "Creamos el ambiente romántico que siempre soñaste. Desde ceremonias íntimas hasta grandes recepciones, cada detalle se diseña para hacer de tu día especial un momento único e inolvidable.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
    {
      icon: Briefcase,
      title: "Eventos Corporativos",
      description:
        "Espacio flexible para presentaciones, cenas de gala y conferencias. Equipamiento profesional y ambiente sofisticado para impresionar a tus clientes y colaboradores.",
      color: "text-foreground",
      bgColor: "bg-muted",
    },
    {
      icon: PartyPopper,
      title: "Festejos Sociales",
      description:
        "Quinceaños, cumpleaños, aniversarios: lo hacemos auténtico. Personalización completa del espacio para reflejar la personalidad y estilo de tu celebración especial.",
      color: "text-primary",
      bgColor: "bg-primary/10",
    },
  ];

  return (
    <section
      ref={sectionRef}
      id="servicios"
      className="py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">
              NUESTROS SERVICIOS
            </span>
          </div>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-services-title"
          >
            Eventos que Inspiran
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Cada tipo de evento merece un enfoque único. Descubre cómo
            transformamos tu visión en realidad.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card
              key={service.title}
              className={`p-8 hover-elevate transition-all duration-700 ${
                isVisible
                  ? "opacity-100 translate-y-0"
                  : "opacity-0 translate-y-10"
              }`}
              style={{ transitionDelay: `${index * 150}ms` }}
              data-testid={`card-service-${index}`}
            >
              <div
                className={`${service.bgColor} w-16 h-16 rounded-md flex items-center justify-center mb-6`}
              >
                <service.icon className={`w-8 h-8 ${service.color}`} />
              </div>
              <h3
                className="font-serif text-2xl font-bold text-foreground mb-4"
                data-testid={`text-service-title-${index}`}
              >
                {service.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {service.description}
              </p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
