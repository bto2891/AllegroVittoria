import { useEffect, useRef, useState } from "react";
import { Phone, Mail, Clock, Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useMutation } from "@tanstack/react-query";
import { insertReservationSchema, type InsertReservation } from "@shared/schema";
import { apiRequest } from "@/lib/queryClient";
import { useToast } from "@/hooks/use-toast";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

export function Reservations() {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef<HTMLElement>(null);
  const { toast } = useToast();

  const form = useForm<InsertReservation>({
    resolver: zodResolver(insertReservationSchema),
    defaultValues: {
      name: "",
      email: "",
      phone: "",
      eventType: "",
      eventDate: "",
      guestCount: "",
      message: "",
    },
  });

  const createReservation = useMutation({
    mutationFn: async (data: InsertReservation) => {
      return await apiRequest("POST", "/api/reservations", data);
    },
    onSuccess: () => {
      toast({
        title: "¡Solicitud Enviada!",
        description: "Nos pondremos en contacto contigo en menos de 24 horas.",
      });
      form.reset();
    },
    onError: (error: any) => {
      const errorMessage = error?.message || "Hubo un problema al enviar tu solicitud. Por favor intenta de nuevo.";
      toast({
        title: "Error",
        description: errorMessage,
        variant: "destructive",
      });
    },
  });

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

  const onSubmit = (data: InsertReservation) => {
    createReservation.mutate(data);
  };

  return (
    <section
      ref={sectionRef}
      id="reservaciones"
      className="py-20 bg-muted/30"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-block px-4 py-1 bg-primary/10 rounded-full mb-4">
            <span className="text-primary font-semibold text-sm">
              RESERVACIONES
            </span>
          </div>
          <h2
            className="font-serif text-4xl sm:text-5xl font-bold text-foreground mb-4"
            data-testid="text-reservations-title"
          >
            Agenda Tu Evento
          </h2>
          <div className="w-20 h-1 bg-primary mx-auto mb-6" />
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            ¡Hablemos de tu evento! Completa el formulario y te responderemos en
            menos de 24 horas.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          <div
            className={`lg:col-span-2 transition-all duration-700 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 -translate-x-10"
            }`}
          >
            <Card className="p-8">
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="name"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Nombre Completo *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="Tu nombre"
                              {...field}
                              data-testid="input-name"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="email"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Correo Electrónico *</FormLabel>
                          <FormControl>
                            <Input
                              type="email"
                              placeholder="tu@email.com"
                              {...field}
                              data-testid="input-email"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="phone"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Teléfono *</FormLabel>
                          <FormControl>
                            <Input
                              placeholder="442 123 4567"
                              {...field}
                              data-testid="input-phone"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="eventType"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Tipo de Evento *</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}
                          >
                            <FormControl>
                              <SelectTrigger data-testid="select-event-type">
                                <SelectValue placeholder="Selecciona un tipo" />
                              </SelectTrigger>
                            </FormControl>
                            <SelectContent>
                              <SelectItem value="boda">Boda</SelectItem>
                              <SelectItem value="corporativo">
                                Evento Corporativo
                              </SelectItem>
                              <SelectItem value="quinceanera">
                                Quinceañera
                              </SelectItem>
                              <SelectItem value="cumpleanos">
                                Cumpleaños
                              </SelectItem>
                              <SelectItem value="aniversario">
                                Aniversario
                              </SelectItem>
                              <SelectItem value="otro">Otro</SelectItem>
                            </SelectContent>
                          </Select>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <div className="grid sm:grid-cols-2 gap-6">
                    <FormField
                      control={form.control}
                      name="eventDate"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Fecha del Evento *</FormLabel>
                          <FormControl>
                            <Input
                              type="date"
                              {...field}
                              data-testid="input-event-date"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name="guestCount"
                      render={({ field }) => (
                        <FormItem>
                          <FormLabel>Número de Invitados *</FormLabel>
                          <FormControl>
                            <Input
                              type="number"
                              placeholder="Ej: 100"
                              {...field}
                              data-testid="input-guest-count"
                            />
                          </FormControl>
                          <FormMessage />
                        </FormItem>
                      )}
                    />
                  </div>

                  <FormField
                    control={form.control}
                    name="message"
                    render={({ field }) => (
                      <FormItem>
                        <FormLabel>Mensaje Adicional (Opcional)</FormLabel>
                        <FormControl>
                          <Textarea
                            placeholder="Cuéntanos más sobre tu evento..."
                            className="min-h-32"
                            {...field}
                            data-testid="input-message"
                          />
                        </FormControl>
                        <FormMessage />
                      </FormItem>
                    )}
                  />

                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-semibold"
                    disabled={createReservation.isPending}
                    data-testid="button-submit-reservation"
                  >
                    {createReservation.isPending ? (
                      <>
                        <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                        Enviando...
                      </>
                    ) : (
                      "Enviar Solicitud"
                    )}
                  </Button>
                  {createReservation.isError && (
                    <p className="text-sm text-destructive text-center" data-testid="text-error-message">
                      Hubo un error al enviar tu solicitud. Por favor intenta de nuevo.
                    </p>
                  )}
                </form>
              </Form>
            </Card>
          </div>

          <div
            className={`space-y-6 transition-all duration-700 delay-200 ${
              isVisible
                ? "opacity-100 translate-x-0"
                : "opacity-0 translate-x-10"
            }`}
          >
            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Phone className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Llámanos
                  </h3>
                  <a
                    href="tel:4421308164"
                    className="text-lg font-medium text-primary hover:underline"
                    data-testid="link-phone"
                  >
                    442 130 8164
                  </a>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Mail className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Escríbenos
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    contacto@allegrovittoria.com
                  </p>
                </div>
              </div>
            </Card>

            <Card className="p-6 hover-elevate">
              <div className="flex items-start gap-4">
                <div className="bg-primary/10 p-3 rounded-md">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground mb-1">
                    Tiempo de Respuesta
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Menos de 24 horas
                  </p>
                </div>
              </div>
            </Card>

            <div className="bg-primary/5 border border-primary/20 rounded-md p-6">
              <p className="text-sm text-muted-foreground leading-relaxed">
                Nuestro equipo está listo para ayudarte a planificar el evento
                perfecto. Te contactaremos lo antes posible para discutir los
                detalles y crear una propuesta personalizada.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
