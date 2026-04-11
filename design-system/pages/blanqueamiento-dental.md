# 🦷 Página de Servicio: Blanqueamiento Dental

> Override del Design System Master para página específica  
> Basado en: Dental Smile Clinic Design System

---

## Información del Servicio

**Nombre:** Blanqueamiento Dental Profesional  
**Categoría:** Estética Dental  
**Duración:** 45-60 minutos  
**Precio:** Desde $299 USD  
**Objetivo:** Convertir visitantes en citas agendadas

---

## Estructura de la Página

```
┌─────────────────────────────────────────┐
│  1. HERO                                │
│     - Imagen before/after               │
│     - Headline: "Sonrisa más brillante  │
│       hasta 8 tonos más clara"          │
│     - Subheadline + CTA principal       │
├─────────────────────────────────────────┤
│  2. SOCIAL PROOF (Stats Bar)            │
│     - 500+ sonrisas transformadas       │
│     - 98% satisfacción                  │
│     - Tecnología LED avanzada           │
├─────────────────────────────────────────┤
│  3. BENEFITS GRID                       │
│     - 6 beneficios en grid 3x2          │
│     - Iconos + título + descripción     │
├─────────────────────────────────────────┤
│  4. HOW IT WORKS (Process)              │
│     - 4 pasos del procedimiento         │
│     - Timeline horizontal               │
├─────────────────────────────────────────┤
│  5. BEFORE/AFTER GALLERY                │
│     - Slider comparativo                │
│     - Resultados reales de pacientes    │
├─────────────────────────────────────────┤
│  6. PRICING CARDS                       │
│     - 3 paquetes comparativos           │
│     - Featured: Paquete Premium         │
├─────────────────────────────────────────┤
│  7. TESTIMONIALS                        │
│     - 3 testimonios de pacientes        │
│     - Estrellas + foto + nombre         │
├─────────────────────────────────────────┤
│  8. FAQ ACCORDION                       │
│     - 5-6 preguntas frecuentes          │
│     - Expandible con animación          │
├─────────────────────────────────────────┤
│  9. FINAL CTA                           │
│     - "Agenda tu consulta gratuita"     │
│     - Formulario simple o botón         │
├─────────────────────────────────────────┤
│  10. RELATED SERVICES                   │
│     - 3 servicios relacionados          │
│     - Cards con link                    │
└─────────────────────────────────────────┘
```

---

## Overrides del Design System

### Colores Específicos
```css
/* Acentos adicionales para esta página */
--accent-glow: rgba(34, 211, 238, 0.15);
--shine-gradient: linear-gradient(135deg, #22D3EE 0%, #0891B2 100%);
```

### Animaciones Específicas
- **Before/After Slider:** Draggable con transición suave
- **Stats Counter:** Contador animado al entrar en viewport
- **Pricing Cards:** Badge "Más Popular" con pulse sutil

### Imágenes Requeridas
1. Hero: Paciente sonriendo (alta calidad, iluminación profesional)
2. Before/After: 3-4 comparativas de blanqueamiento
3. Process: 4 imágenes del procedimiento (opcional: ilustraciones)
4. Testimonials: Fotos de pacientes (o avatares si no hay fotos)

---

## Copy Sugerido

### Hero
**Headline:** "Blanqueamiento Dental Profesional: Una Sonrisa hasta 8 Tonos más Clara"
**Subheadline:** "Tecnología LED de última generación. Resultados visibles desde la primera sesión. Garantía de satisfacción."
**CTA:** "Agenda tu consulta gratuita"
**Secondary CTA:** "Ver resultados"

### Benefits
1. **Rápido** - Solo 45 minutos
2. **Seguro** - Sin dañar el esmalte
3. **Duradero** - Resultados de hasta 2 años
4. **Personalizado** - Ajustado a tus necesidades
5. **Sin dolor** - Procedimiento indoloro
6. **Garantizado** - Satisfacción asegurada

### Process Steps
1. **Consulta** - Evaluación inicial gratuita
2. **Preparación** - Limpieza y protección de encías
3. **Aplicación** - Gel blanqueador + luz LED
4. **Resultado** - Sonrisa brillante inmediata

### FAQ
1. ¿El blanqueamiento dental duele?
2. ¿Cuánto duran los resultados?
3. ¿Es seguro para el esmalte?
4. ¿Puedo blanquear si tengo brackets?
5. ¿Cuántas sesiones necesito?
6. ¿Hay alguna restricción después del tratamiento?

---

## Componentes a Crear

### Nuevos Componentes
- `BeforeAfterSlider` - Comparador de imágenes
- `StatsCounter` - Contador animado
- `PricingCard` - Tarjeta de precios con features
- `FaqAccordion` - Acordeón de preguntas
- `ProcessSteps` - Timeline de pasos

### Componentes Existentes (reutilizar)
- `ServiceCard` - Para servicios relacionados
- `TestimonialCard` - Para testimonios
- `Button` - CTAs
- `Section` - Layout de secciones

---

## Meta Tags (SEO)

```
title: Blanqueamiento Dental Profesional | Dental Smile Clinic
description: Transforma tu sonrisa con nuestro blanqueamiento dental profesional. Hasta 8 tonos más claros en una sola sesión. Agenda tu consulta gratuita.
keywords: blanqueamiento dental, blanquear dientes, sonrisa blanca, estética dental
```

---

## Notas de Implementación

1. **Optimización de imágenes:** Usar WebP con fallback a JPG
2. **Lazy loading:** Cargar imágenes below-fold al hacer scroll
3. **Schema markup:** Agregar LocalBusiness y Service schemas
4. **CTAs múltiples:** Botón de agendar en Hero, después de Pricing, y Final CTA
5. **Tracking:** Eventos de analytics en clicks de CTA y formulario

---

*Override para página: blanqueamiento-dental*  
*Basado en: MASTER.md*
