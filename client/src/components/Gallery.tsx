import { useEffect, useRef, useState } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import weddingImage from "@assets/generated_images/Elegant_wedding_reception_hall_379581a6.png";
import corporateImage from "@assets/generated_images/Corporate_event_ballroom_setup_88fe847a.png";
import quinceaneraImage from "@assets/generated_images/Quinceañera_celebration_hall_pink_gold_0495e9d4.png";
import tableImage from "@assets/generated_images/Luxury_table_setting_close-up_5e631639.png";
import danceFloorImage from "@assets/generated_images/Elegant_dance_floor_celebration_37cfdc9d.png";
import exteriorImage from "@assets/generated_images/Modern_event_venue_exterior_d11d1e96.png";

export function Gallery() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);

  const images = [
    {
      src: weddingImage,
      alt: "Elegante recepción de boda con candelabros y decoración dorada",
      title: "Bodas de Ensueño",
    },
    {
      src: corporateImage,
      alt: "Evento corporativo con montaje profesional",
      title: "Eventos Corporativos",
    },
    {
      src: quinceaneraImage,
      alt: "Celebración de quinceañera con decoración rosa y dorada",
      title: "Quinceañeras",
    },
    {
      src: tableImage,
      alt: "Mesa elegante con vajilla fina y decoración dorada",
      title: "Detalles Exquisitos",
    },
    {
      src: danceFloorImage,
      alt: "Pista de baile iluminada con ambiente festivo",
      title: "Celebración",
    },
    {
      src: exteriorImage,
      alt: "Entrada moderna del salón de eventos",
      title: "Nuestras Instalaciones",
    },
  ];

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

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [images.length]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  return (
    <section
      ref={sectionRef}
      id="galeria"
      className="py-20 bg-background"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">GALERÍA</span>
          </div>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-gallery-title"
          >
            Momentos Inolvidables
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explora nuestro espacio y descubre las posibilidades infinitas para
            tu evento especial
          </p>
        </div>

        <div
          className={`relative aspect-[16/9] rounded-md overflow-hidden transition-all duration-700 ${
            isVisible ? "opacity-100 scale-100" : "opacity-0 scale-95"
          }`}
        >
          <div className="relative w-full h-full">
            {images.map((image, index) => (
              <div
                key={index}
                className={`absolute inset-0 transition-opacity duration-500 ${
                  index === currentIndex ? "opacity-100 z-10" : "opacity-0 z-0"
                }`}
                data-testid={`gallery-slide-${index}`}
              >
                <img
                  src={image.src}
                  alt={image.alt}
                  className="w-full h-full object-cover"
                  data-testid={`img-gallery-${index}`}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
                <div className="absolute bottom-8 left-8 z-20">
                  <h3 className="font-serif text-3xl font-bold text-white">
                    {image.title}
                  </h3>
                </div>
              </div>
            ))}
          </div>

          <Button
            variant="outline"
            size="icon"
            className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm"
            onClick={goToPrevious}
            data-testid="button-gallery-prev"
          >
            <ChevronLeft className="h-6 w-6" />
          </Button>

          <Button
            variant="outline"
            size="icon"
            className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/90 hover:bg-white backdrop-blur-sm"
            onClick={goToNext}
            data-testid="button-gallery-next"
          >
            <ChevronRight className="h-6 w-6" />
          </Button>

          <div className="absolute bottom-4 left-1/2 -translate-x-1/2 z-20 flex gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentIndex(index)}
                className={`w-2 h-2 rounded-full transition-all duration-300 ${
                  index === currentIndex
                    ? "bg-primary w-8"
                    : "bg-white/60 hover:bg-white/80"
                }`}
                data-testid={`button-gallery-dot-${index}`}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
