import { useRef } from "react";
import { Header } from "@/components/Header";
import { Hero } from "@/components/Hero";
import { About } from "@/components/About";
import { Services } from "@/components/Services";
import { Gallery } from "@/components/Gallery";
import { Reservations } from "@/components/Reservations";
import { Location } from "@/components/Location";
import { Footer } from "@/components/Footer";

export default function Home() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const headerOffset = 80;
      const elementPosition = element.getBoundingClientRect().top;
      const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth",
      });
    }
  };

  const handleReservationsClick = () => {
    scrollToSection("reservaciones");
  };

  return (
    <div className="min-h-screen bg-background">
      <Header onNavigate={scrollToSection} />
      <main>
        <Hero onNavigateToReservations={handleReservationsClick} />
        <About />
        <Services />
        <Gallery />
        <Reservations />
        <Location />
      </main>
      <Footer onNavigate={scrollToSection} />
    </div>
  );
}
