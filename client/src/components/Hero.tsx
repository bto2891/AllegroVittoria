import { Button } from "@/components/ui/button";
import heroImage from "@assets/generated_images/Grand_ballroom_hero_image_4e6e294f.png";

interface HeroProps {
  onNavigateToReservations: () => void;
}

export function Hero({ onNavigateToReservations }: HeroProps) {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      <div
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
        data-testid="img-hero-background"
      />
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/50 to-black/60" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto">
        <h1
          className="font-serif text-5xl sm:text-6xl lg:text-7xl font-bold text-white mb-6 animate-fade-in"
          data-testid="text-hero-title"
        >
          Allegro Vittoria
        </h1>
        <p
          className="text-xl sm:text-2xl lg:text-3xl text-white/90 mb-8 font-light animate-fade-in"
          style={{ animationDelay: "0.2s", opacity: 0 }}
          data-testid="text-hero-subtitle"
        >
          El Escenario Perfecto para Tu Celebración
        </p>
        <p
          className="text-lg sm:text-xl text-white/80 mb-12 max-w-2xl mx-auto animate-fade-in"
          style={{ animationDelay: "0.4s", opacity: 0 }}
        >
          Ubicados en el corazón de Juriquilla, Querétaro, transformamos cada evento en una experiencia inolvidable
        </p>
        <Button
          size="lg"
          onClick={onNavigateToReservations}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-semibold text-lg px-8 py-6 h-auto animate-fade-in backdrop-blur-sm"
          style={{ animationDelay: "0.6s", opacity: 0 }}
          data-testid="button-reserve-now"
        >
          Reserva Ahora
        </Button>
      </div>
    </section>
  );
}
