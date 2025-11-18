# Allegro Vittoria - Sitio Web del Salón de Eventos

## Descripción General
Sitio web elegante y profesional para Allegro Vittoria, un salón de eventos premium ubicado en Juriquilla, Querétaro. El sitio presenta un diseño moderno con paleta de colores oro, negro, blanco y gris, reflejando la sofisticación y elegancia del salón.

## Información del Negocio
- **Nombre**: Allegro Vittoria
- **Ubicación**: Blvd. Villas del Mesón 2998-Local 10, Jurica Acueducto, 76226 Juriquilla, Qro., México
- **Teléfono**: 442 130 8164
- **Email**: contacto@allegrovittoria.com

## Características Principales

### Secciones del Sitio
1. **Hero Section**: Imagen impactante con llamado a la acción para reservaciones
2. **Sobre Nosotros**: Presentación del salón, ubicación y valores
3. **Servicios**: Tres tipos principales de eventos (bodas, corporativos, festejos sociales)
4. **Galería**: Carrusel automático con 6 imágenes elegantes del salón
5. **Reservaciones**: Formulario completo con validación y información de contacto
6. **Ubicación**: Google Maps integrado con dirección completa
7. **Footer**: Enlaces rápidos, contacto y redes sociales

### Características Técnicas
- **Stack**: React + TypeScript + Express
- **Styling**: Tailwind CSS con sistema de diseño personalizado
- **Fuentes**: Playfair Display (serif) para títulos, Montserrat (sans-serif) para cuerpo
- **Animaciones**: Fade-in al hacer scroll, transiciones suaves
- **Responsive**: Diseño totalmente adaptable a móvil, tablet y escritorio
- **SEO**: Meta tags optimizados para buscadores

## Estructura del Proyecto

### Frontend (`client/src/`)
- **components/**: Componentes reutilizables
  - `Header.tsx`: Navegación sticky con menú móvil
  - `Hero.tsx`: Sección principal con imagen de fondo
  - `About.tsx`: Presentación del salón
  - `Services.tsx`: Tarjetas de servicios con iconos
  - `Gallery.tsx`: Carrusel de imágenes
  - `Reservations.tsx`: Formulario de contacto validado
  - `Location.tsx`: Mapa de Google Maps
  - `Footer.tsx`: Pie de página completo
- **pages/**: Páginas de la aplicación
  - `Home.tsx`: Página principal con todas las secciones
- **lib/**: Utilidades y configuración

### Backend (`server/`)
- **routes.ts**: Endpoints de la API
- **storage.ts**: Gestión de almacenamiento de reservaciones

### Schema (`shared/`)
- **schema.ts**: Definiciones de tipos y validaciones Zod para reservaciones

## Sistema de Diseño

### Colores
- **Primario**: Oro (#D4AF37) - CTAs y acentos
- **Fondo**: Blanco/Gris claro
- **Texto**: Negro con jerarquía de opacidad
- **Acentos**: Tonos de gris para contraste sutil

### Tipografía
- **Headings**: Playfair Display (serif, elegante)
- **Body**: Montserrat (sans-serif, legible)
- **Jerarquía**: H1: 3.5rem → H2: 2.5rem → H3: 1.75rem → Body: 1rem

### Espaciado
- Sistema consistente usando múltiplos de 4px
- Padding de secciones: py-20 (desktop), py-16 (mobile)
- Gaps: 8px, 12px, 16px, 24px

## Funcionalidades

### Formulario de Reservaciones
Campos obligatorios:
- Nombre completo
- Correo electrónico
- Teléfono
- Tipo de evento (dropdown)
- Fecha del evento
- Número de invitados
- Mensaje adicional (opcional)

Validación completa con mensajes de error en español.

### Navegación
- Scroll suave a secciones
- Header sticky que cambia opacidad al hacer scroll
- Menú hamburguesa responsive para móvil
- Enlaces rápidos en footer

### Interacciones
- Animaciones fade-in al entrar en viewport
- Hover effects sutiles en botones y cards
- Carrusel automático con controles manuales
- Estados de carga en formulario

## Datos de Contacto en el Sitio
- **Teléfono**: 442 130 8164 (clickeable para llamar)
- **Email**: contacto@allegrovittoria.com
- **WhatsApp**: wa.me/524421308164
- **Redes Sociales**: Facebook, Instagram (placeholders)

## Optimizaciones
- Imágenes generadas con IA de alta calidad
- Lazy loading de contenido
- Favicon personalizado con iniciales "AV"
- Meta tags para SEO y Open Graph
- Animaciones con performance optimizada

## Desarrollo

### Comandos
```bash
npm run dev  # Inicia servidor de desarrollo
```

### Navegación Interna
El sitio usa smooth scroll para navegar entre secciones. Todas las interacciones están optimizadas para una experiencia fluida.

## Próximas Mejoras Potenciales
- Sistema de administración para gestionar reservaciones
- Calculadora de presupuestos
- Testimonios de clientes
- Paquetes y precios
- Integración real con sistema de email
- Panel de disponibilidad de fechas
