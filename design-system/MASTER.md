# 🦷 Dental Smile Clinic - Design System

> Generated with UI/UX Pro Max v2.0  
> Target: Clínica Dental Premium  
> Pattern: Hero-Centric + Social Proof

---

## 1. PATRÓN DE DISEÑO

**Pattern:** Hero-Centric + Social Proof + Trust & Authority

**Estructura recomendada:**
1. **Hero** - Imagen impactante + CTA claro
2. **Social Proof** - Estadísticas + Testimonios
3. **Services** - Grid de servicios destacados
4. **Benefits** - Por qué elegirnos
5. **CTA** - Llamado a la acción (agendar)
6. **FAQ** - Preguntas frecuentes
7. **Contact** - Formulario + info

**Conversión:** Emotion-driven with trust elements

---

## 2. ESTILO UI

**Style:** Soft UI Evolution + Medical Clean

**Keywords:** 
- Soft shadows
- Subtle depth
- Calming
- Premium feel
- Clean & sterile
- Professional trust

**Best For:** Healthcare, dental clinics, medical services

**Performance:** Excellent | **Accessibility:** WCAG AA

---

## 3. PALETA DE COLORES

### Colores Principales
| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| **Primary** | Cyan médico | `#0891B2` | Headers, enlaces, acentos |
| **Secondary** | Cyan claro | `#22D3EE` | Hover states, highlights |
| **CTA** | Verde salud | `#059669` | Botones de acción, éxito |
| **CTA Hover** | Verde oscuro | `#047857` | Hover de botones CTA |

### Colores de Soporte
| Rol | Color | Hex | Uso |
|-----|-------|-----|-----|
| **Background** | Blanco hielo | `#F0F9FF` | Fondo principal |
| **Surface** | Blanco puro | `#FFFFFF` | Tarjetas, modales |
| **Text Primary** | Azul oscuro | `#164E63` | Texto principal |
| **Text Secondary** | Gris azulado | `#64748B` | Texto secundario |
| **Border** | Cyan muy claro | `#A5F3FC` | Bordes, divisores |

### Colores de Estado
| Estado | Color | Hex |
|--------|-------|-----|
| **Success** | Verde | `#10B981` |
| **Warning** | Ámbar | `#F59E0B` |
| **Error** | Rojo suave | `#EF4444` |
| **Info** | Azul | `#3B82F6` |

---

## 4. TIPOGRAFÍA

**Pairing:** Medical Clean (Figtree + Noto Sans)

**Mood:** Clean, accessible, professional, healthcare

### Google Fonts Import
```css
@import url('https://fonts.googleapis.com/css2?family=Figtree:wght@300;400;500;600;700&family=Noto+Sans:wght@300;400;500;700&display=swap');
```

### Escala Tipográfica
| Elemento | Font | Weight | Size | Line Height |
|----------|------|--------|------|-------------|
| **H1** | Figtree | 700 | 48px / 3rem | 1.1 |
| **H2** | Figtree | 600 | 36px / 2.25rem | 1.2 |
| **H3** | Figtree | 600 | 24px / 1.5rem | 1.3 |
| **H4** | Figtree | 500 | 20px / 1.25rem | 1.4 |
| **Body** | Noto Sans | 400 | 16px / 1rem | 1.6 |
| **Body Small** | Noto Sans | 400 | 14px / 0.875rem | 1.5 |
| **Caption** | Noto Sans | 400 | 12px / 0.75rem | 1.4 |
| **Button** | Figtree | 600 | 16px / 1rem | 1 |

---

## 5. ESPACIADO

### Sistema de Espaciado (8px base)
```
4px   - xs
8px   - sm
16px  - md (base)
24px  - lg
32px  - xl
48px  - 2xl
64px  - 3xl
96px  - 4xl
```

### Secciones
- **Section Padding:** 80px vertical (desktop), 48px (mobile)
- **Container Max Width:** 1280px
- **Container Padding:** 16px (mobile), 24px (tablet), 32px (desktop)

---

## 6. COMPONENTES

### Botones

**Primary Button (CTA)**
- Background: `#059669`
- Text: `#FFFFFF`
- Padding: 16px 32px
- Border Radius: 8px
- Font: Figtree 600
- Shadow: `0 4px 6px -1px rgba(5, 150, 105, 0.2)`
- Hover: `#047857` + translateY(-1px)

**Secondary Button**
- Background: `#FFFFFF`
- Border: 2px solid `#0891B2`
- Text: `#0891B2`
- Padding: 14px 30px
- Border Radius: 8px
- Hover: Background `#F0F9FF`

**Ghost Button**
- Background: transparent
- Text: `#0891B2`
- Hover: Background `#F0F9FF`

### Tarjetas

**Service Card**
- Background: `#FFFFFF`
- Border Radius: 16px
- Padding: 32px
- Shadow: `0 4px 20px rgba(8, 145, 178, 0.08)`
- Hover Shadow: `0 8px 30px rgba(8, 145, 178, 0.12)`

**Testimonial Card**
- Background: `#FFFFFF`
- Border Radius: 12px
- Padding: 24px
- Border: 1px solid `#A5F3FC`

### Formularios

**Input Field**
- Background: `#FFFFFF`
- Border: 1px solid `#A5F3FC`
- Border Radius: 8px
- Padding: 12px 16px
- Focus Border: `#0891B2`
- Focus Ring: `0 0 0 3px rgba(8, 145, 178, 0.1)`

---

## 7. EFECTOS Y ANIMACIONES

### Sombras
```css
--shadow-sm: 0 1px 2px rgba(8, 145, 178, 0.05);
--shadow-md: 0 4px 6px -1px rgba(8, 145, 178, 0.08);
--shadow-lg: 0 10px 15px -3px rgba(8, 145, 178, 0.1);
--shadow-xl: 0 20px 25px -5px rgba(8, 145, 178, 0.12);
```

### Transiciones
- **Micro-interactions:** 150-200ms ease-out
- **Hover states:** 200-300ms ease
- **Page transitions:** 300-400ms ease-in-out
- **Scroll animations:** 400-600ms cubic-bezier(0.4, 0, 0.2, 1)

### Animaciones Recomendadas
- Fade in up on scroll
- Subtle scale on hover (1.02)
- Soft shadow lift on cards
- Smooth color transitions

---

## 8. ÍCONOS

**Library:** Lucide React (ya instalado)

**Icon Style:** Outline, 1.5px stroke

**Icon Sizes:**
- Small: 16px
- Medium: 20px (default)
- Large: 24px
- XL: 32px

---

## 9. REGLAS DE ACCESIBILIDAD

- **Color Contrast:** Mínimo 4.5:1 para texto normal
- **Focus States:** Anillo visible en todos los elementos interactivos
- **Touch Targets:** Mínimo 44x44px
- **Reduced Motion:** Respetar `prefers-reduced-motion`
- **Alt Text:** Todas las imágenes deben tener descripción
- **ARIA Labels:** Botones con iconos solo

---

## 10. ANTI-PATTERNS (QUÉ EVITAR)

❌ No usar:
- Colores neón brillantes
- Animaciones bruscas o excesivas
- Dark mode (para este diseño médico)
- Gradientes morado/rosa tipo "AI"
- Emojis como iconos (usar SVG)
- Sombras duras o negras puras
- Texturas agresivas

---

## 11. PRE-DELIVERY CHECKLIST

- [ ] No emojis como iconos (usar Lucide)
- [ ] `cursor-pointer` en elementos clickeables
- [ ] Estados hover con transiciones suaves (150-300ms)
- [ ] Contraste de texto 4.5:1 mínimo
- [ ] Estados focus visibles para navegación por teclado
- [ ] `prefers-reduced-motion` respetado
- [ ] Responsive: 375px, 768px, 1024px, 1440px
- [ ] Imágenes con alt text descriptivo
- [ ] Formularios con labels asociados
- [ ] Loading states para botones async

---

## 12. RESPONSIVE BREAKPOINTS

| Breakpoint | Ancho | Ajustes |
|------------|-------|---------|
| **Mobile** | < 640px | Columna única, padding reducido |
| **Tablet** | 640px - 1024px | 2 columnas |
| **Desktop** | 1024px - 1280px | 3-4 columnas |
| **Large** | > 1280px | Máximo ancho container |

---

*Generated with UI/UX Pro Max Skill v2.0*  
*Last updated: 2026-04-11*
