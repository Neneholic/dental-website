# 📋 Plan de Implementación: Página de Servicio - Blanqueamiento Dental

> Fecha: 2026-04-11  
> Design System: Dental Smile Clinic (UI/UX Pro Max)  
> Página: `/servicios/blanqueamiento-dental`

---

## 🎯 Objetivo

Crear una página de servicio altamente convertidora para el servicio de **Blanqueamiento Dental**, aplicando el Design System recién creado y siguiendo las mejores prácticas UX/UI.

---

## 📐 Fase 1: Setup y Configuración (Est. 30 min)

### Tareas:
- [ ] Actualizar `globals.css` con las nuevas fuentes (Figtree + Noto Sans)
- [ ] Extender configuración de Tailwind con colores del Design System
- [ ] Crear archivo de configuración de animaciones (Framer Motion variants)
- [ ] Verificar responsive base

### Archivos a modificar:
- `app/globals.css` - Agregar imports de fuentes y CSS variables
- `next.config.ts` - Verificar configuración de imágenes

---

## 🧱 Fase 2: Componentes Base (Est. 1.5 horas)

### 2.1 Componentes UI Atómicos

| Componente | Props | Descripción |
|------------|-------|-------------|
| `Button` | variant, size, children, onClick | Primary, Secondary, Ghost |
| `Badge` | color, children | Para etiquetas y estados |
| `Card` | className, children | Contenedor base con sombras del DS |
| `Section` | id, className, children | Wrapper de secciones con padding |
| `Container` | size, children | Max-width container |

### 2.2 Componentes de Iconos
- Reutilizar `lucide-react`
- Crear mapeo de iconos por servicio

### Archivos a crear:
```
app/components/ui/
├── Button.tsx
├── Badge.tsx
├── Card.tsx
├── Section.tsx
└── Container.tsx
```

---

## ⚡ Fase 3: Componentes de Animación (Est. 1 hora)

### 3.1 Framer Motion Variants

| Componente | Efecto |
|------------|--------|
| `FadeInUp` | Fade + translate Y on scroll |
| `StaggerContainer` | Stagger children animations |
| `ScaleOnHover` | Scale suave en hover |
| `CountUp` | Animación de números contadores |

### 3.2 Scroll Animations
- [ ] Instalar/use `IntersectionObserver` hook
- [ ] Crear `useScrollAnimation` hook
- [ ] Implementar `AnimatedSection` wrapper

### Archivos a crear:
```
app/components/animations/
├── FadeInUp.tsx
├── StaggerContainer.tsx
├── CountUp.tsx
└── useScrollAnimation.ts
```

---

## 🎨 Fase 4: Componentes de Sección (Est. 2.5 horas)

### 4.1 Hero Section
- [ ] Layout con imagen de fondo/lateral
- [ ] Headline + subheadline
- [ ] CTA buttons (Primary + Secondary)
- [ ] Trust badges debajo del CTA

### 4.2 Stats Bar
- [ ] Grid de 3-4 estadísticas
- [ ] Contadores animados
- [ ] Iconos + números + labels

### 4.3 Benefits Grid
- [ ] Grid 3x2 responsive (1 columna mobile)
- [ ] Cards con icono + título + descripción
- [ ] Hover effects

### 4.4 Process Steps
- [ ] Timeline horizontal (vertical en mobile)
- [ ] 4 pasos con números/iconos
- [ ] Línea conectora animada

### 4.5 Before/After Gallery
- [ ] Slider comparativo ( antes/después )
- [ ] 3-4 casos de pacientes
- [ ] Navegación con dots o flechas

### 4.6 Pricing Cards
- [ ] 3 tarjetas comparativas
- [ ] Card "Destacada" con badge
- [ ] Lista de features con checkmarks
- [ ] CTA por cada plan

### 4.7 Testimonials
- [ ] Carrusel o grid de 3 testimonios
- [ ] Estrellas de rating
- [ ] Foto + nombre + testimonio

### 4.8 FAQ Accordion
- [ ] Componente acordeón accesible
- [ ] 5-6 preguntas frecuentes
- [ ] Animación de expandir/colapsar

### 4.9 Final CTA
- [ ] Section con fondo destacado (primary color)
- [ ] Headline de urgencia/beneficio
- [ ] Formulario simple o botón grande

### 4.10 Related Services
- [ ] Grid de 3 servicios relacionados
- [ ] Cards con imagen + título + link

### Archivos a crear:
```
app/[locale]/sections/services/
├── ServiceHero.tsx
├── ServiceStats.tsx
├── ServiceBenefits.tsx
├── ServiceProcess.tsx
├── BeforeAfterGallery.tsx
├── PricingCards.tsx
├── ServiceTestimonials.tsx
├── ServiceFaq.tsx
├── FinalCta.tsx
└── RelatedServices.tsx
```

---

## 📄 Fase 5: Página Principal (Est. 1 hora)

### 5.1 Crear Estructura de Ruta
```
app/[locale]/servicios/
├── blanqueamiento-dental/
│   └── page.tsx
```

### 5.2 Componer la Página
```tsx
// page.tsx estructura
<main>
  <ServiceHero />
  <ServiceStats />
  <ServiceBenefits />
  <ServiceProcess />
  <BeforeAfterGallery />
  <PricingCards />
  <ServiceTestimonials />
  <ServiceFaq />
  <FinalCta />
  <RelatedServices />
</main>
```

### 5.3 Metadata y SEO
- [ ] Title y description
- [ ] Open Graph tags
- [ ] Schema.org markup (Service, LocalBusiness)

---

## 🔧 Fase 6: Internacionalización (Est. 45 min)

### 6.1 Traducciones (i18n)
Agregar keys a:
- `messages/en.json`
- `messages/es.json`

### Estructura:
```json
{
  "Services": {
    "Whitening": {
      "title": "...",
      "description": "...",
      "hero": { ... },
      "benefits": { ... },
      "faq": { ... }
    }
  }
}
```

---

## ✅ Fase 7: Testing y QA (Est. 1 hora)

### 7.1 Checklist de Verificación
- [ ] Responsive en 375px, 768px, 1024px, 1440px
- [ ] Contraste de colores WCAG AA
- [ ] Estados focus visibles
- [ ] `prefers-reduced-motion` funciona
- [ ] Carga de fuentes correcta
- [ ] Imágenes optimizadas (WebP)
- [ ] CTAs funcionan correctamente
- [ ] Formularios validan input
- [ ] Accordion accesible (teclado)
- [ ] Links navegables

### 7.2 Performance
- [ ] Lighthouse score > 90
- [ ] Imágenes lazy loaded
- [ ] No layout shift en carga

### 7.3 Accessibility
- [ ] Tab order lógico
- [ ] ARIA labels en iconos
- [ ] Alt text en imágenes
- [ ] Skip to content link

---

## 📊 Estimación Total

| Fase | Tiempo Est. |
|------|-------------|
| 1. Setup | 30 min |
| 2. Componentes Base | 1.5 h |
| 3. Animaciones | 1 h |
| 4. Secciones | 2.5 h |
| 5. Página | 1 h |
| 6. i18n | 45 min |
| 7. QA | 1 h |
| **Total** | **~8 horas** |

---

## 🚀 Próximos Pasos

1. **Aprobar plan** - Revisar con stakeholders
2. **Preparar assets** - Imágenes before/after, fotos de pacientes
3. **Definir copy final** - Revisar textos sugeridos
4. **Iniciar desarrollo** - Comenzar con Fase 1

---

## 📚 Referencias

- [Design System Master](./design-system/MASTER.md)
- [Especificación de Página](./design-system/pages/blanqueamiento-dental.md)
- [UI/UX Pro Max Skill](./.claude/skills/ui-ux-pro-max/SKILL.md)

---

*Plan creado con UI/UX Pro Max Design System*  
*Dental Smile Clinic - 2026*
