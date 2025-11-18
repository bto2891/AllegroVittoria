# Design Guidelines: Allegro Vittoria Event Venue Website

## Design Approach
**Reference-Based**: Draw inspiration from luxury hospitality and event venue websites (The Plaza, Baccarat Hotels, high-end wedding venues). Focus on sophistication, elegance, and celebration while maintaining approachability for the Querétaro market.

## Color Palette
- **Primary**: Gold (#D4AF37, #C9A961) for accents, borders, and highlights
- **Neutrals**: White (#FFFFFF), Black (#000000), Soft Gray (#F5F5F5, #E8E8E8)
- **Usage**: Gold for CTAs and elegant accents, white/gray for backgrounds, black for text and sophisticated contrast

## Typography System
- **Headings**: Elegant serif font (Playfair Display, Cormorant) for section titles and main headings
- **Body**: Clean sans-serif (Montserrat, Inter) for readability
- **Hierarchy**: 
  - H1: 3.5rem desktop / 2.5rem mobile (Hero title)
  - H2: 2.5rem desktop / 2rem mobile (Section headers)
  - H3: 1.75rem (Service titles)
  - Body: 1rem base, 1.125rem for important text

## Layout & Spacing
- **Container**: max-w-7xl centered
- **Spacing Units**: Use Tailwind spacing - primarily p-8, p-12, p-16, p-20 for sections (responsive)
- **Section Padding**: py-16 mobile, py-20 desktop for consistent vertical rhythm

## Core Sections & Components

### 1. Header/Navigation
- Sticky navigation with "Allegro Vittoria" logo/name on left
- Menu items: Inicio, Servicios, Galería, Reservaciones, Contacto
- Gold underline animation on active/hover states
- Mobile: Hamburger menu with smooth slide-in

### 2. Hero Section
- Full-width elegant background image (80vh) showing sophisticated event space
- Centered overlay with:
  - "Allegro Vittoria" in elegant serif
  - Tagline: "El Escenario Perfecto para Tu Celebración"
  - Primary CTA button "Reserva Ahora" with gold background and blur effect
- Dark overlay (40% opacity) for text readability

### 3. About Us Section
- Two-column layout (desktop): Image left, text right
- Content includes Juriquilla location emphasis and capacity details
- Gold accent border or decorative element

### 4. Services Section
- Three-column grid (desktop), single column (mobile)
- Each service card includes:
  - Icon (wedding rings, briefcase, celebration) from Font Awesome
  - Service title in serif font
  - Brief description
  - Subtle hover effect with gold border/shadow

### 5. Gallery Section
- Full-width image carousel/slider
- 4-6 high-quality stock images of elegant event spaces
- Navigation dots in gold
- Automatic rotation with manual controls

### 6. Reservations Section
- Split layout (desktop): Form left (60%), contact info right (40%)
- Form fields: Nombre, Tipo de Evento (dropdown), Fecha (date picker), Número de Invitados (number)
- Gold submit button with validation
- Right side: Phone number (442 130 8164) prominently displayed with call icon
- "Respuesta en menos de 24 horas" assurance text

### 7. Location Section
- Google Maps embed (full section width, 400px height)
- Address displayed below with directions hint
- Gold map pin icon accent

### 8. Footer
- Three-column layout: Contact info, Quick links, Social media placeholders
- Repeated address and phone
- Social icons (Facebook, Instagram, WhatsApp) in gold on hover
- Copyright text centered below

## Images Strategy
- **Hero**: Large, elegant event space image (chandelier, decorated tables, uplighting)
- **About**: Warm, welcoming venue shot showing versatility
- **Gallery**: 6 images - wedding setup, corporate event, quinceañera decoration, table settings, dance floor, exterior/entrance
- All images should convey elegance, celebration, and sophistication

## Animations & Interactions
- **Scroll Animations**: Fade-in effect (opacity 0 to 1) for each section as it enters viewport
- **Hover States**: Subtle scale (1.05) on service cards, gold color transitions on links
- **Form Validation**: Red borders for errors, green checkmarks for valid fields
- **Button Interactions**: Gold buttons darken slightly on hover, scale subtly

## Special Elements
- **Favicon**: Circle or shield with "AV" initials in gold on black background
- **Accessibility**: All form fields labeled, alt text for images, keyboard navigation
- **Mobile Optimization**: Stack all multi-column layouts, touch-friendly buttons (min 44px)

## Meta Information
- Title: "Allegro Vittoria – Salón de Eventos en Juriquilla, Querétaro"
- Description: "Allegro Vittoria en Juriquilla ofrece el escenario perfecto para bodas, eventos corporativos y celebraciones especiales. Ubicado en Blvd. Villas del Mesón 2998-Local 10, a solo una cuadra de la autopista 57. Reserva al 442 130 8164."