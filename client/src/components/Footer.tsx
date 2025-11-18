import { MapPin, Phone, Mail } from "lucide-react";
import { SiFacebook, SiInstagram, SiWhatsapp } from "react-icons/si";

interface FooterProps {
  onNavigate: (section: string) => void;
}

export function Footer({ onNavigate }: FooterProps) {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: "Inicio", id: "hero" },
    { label: "Sobre Nosotros", id: "sobre-nosotros" },
    { label: "Servicios", id: "servicios" },
    { label: "Galería", id: "galeria" },
    { label: "Reservaciones", id: "reservaciones" },
  ];

  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid md:grid-cols-3 gap-8 mb-8">
          <div>
            <h3 className="font-serif text-2xl font-bold bg-gradient-to-r from-primary to-primary/80 bg-clip-text text-transparent mb-4">
              Allegro Vittoria
            </h3>
            <p className="text-sm text-muted-foreground mb-4 leading-relaxed">
              Transformamos cada evento en una experiencia inolvidable. El
              escenario perfecto para tus celebraciones en Juriquilla, Querétaro.
            </p>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">
              Enlaces Rápidos
            </h4>
            <ul className="space-y-2">
              {quickLinks.map((link) => (
                <li key={link.id}>
                  <button
                    onClick={() => onNavigate(link.id)}
                    className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                    data-testid={`link-footer-${link.id}`}
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Contacto</h4>
            <ul className="space-y-3">
              <li className="flex items-start gap-2">
                <MapPin className="h-4 w-4 text-primary mt-1 flex-shrink-0" />
                <span className="text-sm text-muted-foreground">
                  Blvd. Villas del Mesón 2998-Local 10, Juriquilla, Qro.
                </span>
              </li>
              <li className="flex items-center gap-2">
                <Phone className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="tel:4421308164"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  data-testid="link-footer-phone"
                >
                  442 130 8164
                </a>
              </li>
              <li className="flex items-center gap-2">
                <Mail className="h-4 w-4 text-primary flex-shrink-0" />
                <a
                  href="mailto:contacto@allegrovittoria.com"
                  className="text-sm text-muted-foreground hover:text-primary transition-colors duration-300"
                  data-testid="link-footer-email"
                >
                  contacto@allegrovittoria.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="pt-8 border-t border-card-border">
          <div className="flex flex-col sm:flex-row justify-between items-center gap-4">
            <p className="text-sm text-muted-foreground text-center sm:text-left">
              © {currentYear} Allegro Vittoria. Todos los derechos reservados.
            </p>
            <div className="flex gap-4">
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Facebook"
                data-testid="link-facebook"
              >
                <SiFacebook className="h-5 w-5" />
              </a>
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="Instagram"
                data-testid="link-instagram"
              >
                <SiInstagram className="h-5 w-5" />
              </a>
              <a
                href="https://wa.me/524421308164"
                target="_blank"
                rel="noopener noreferrer"
                className="text-muted-foreground hover:text-primary transition-colors duration-300"
                aria-label="WhatsApp"
                data-testid="link-whatsapp"
              >
                <SiWhatsapp className="h-5 w-5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
