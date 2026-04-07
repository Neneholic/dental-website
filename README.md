# Dental Website - LifePath

Sitio web moderno para clínica dental con animaciones fluidas usando Framer Motion y base de datos PostgreSQL en Neon.

## 🛠️ Stack Tecnológico

- **Next.js 14** - Framework React
- **TypeScript** - Tipado estático
- **Tailwind CSS** - Estilos utilitarios
- **Framer Motion** - Animaciones
- **Prisma** - ORM para base de datos
- **Neon** - PostgreSQL serverless
- **Vercel** - Hosting

## 🚀 Inicio Rápido

### 1. Clonar y Instalar

```bash
git clone <tu-repo>
cd dental-website
npm install
```

### 2. Configurar Variables de Entorno

Crea un archivo `.env.local`:

```env
DATABASE_URL="postgresql://usuario:password@host.neon.tech/database?sslmode=require"
```

Obtén el connection string desde tu dashboard de [Neon](https://neon.tech).

### 3. Configurar Base de Datos

```bash
# Generar cliente Prisma
npx prisma generate

# Crear migraciones
npx prisma migrate dev --name init

# (Opcional) Abrir Prisma Studio
npx prisma studio
```

### 4. Desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000).

## 📁 Estructura del Proyecto

```
app/
├── sections/          # Secciones de la página
│   ├── Navbar.tsx
│   ├── Hero.tsx
│   ├── About.tsx
│   ├── Services.tsx
│   ├── Works.tsx
│   ├── Consultation.tsx
│   ├── Testimonials.tsx
│   ├── Blog.tsx
│   └── Footer.tsx
├── components/        # Componentes reutilizables
│   ├── AnimatedSection.tsx
│   ├── AnimatedCounter.tsx
│   └── MagneticButton.tsx
├── hooks/             # Hooks personalizados
├── lib/               # Utilidades y DB
├── api/               # API Routes
└── globals.css        # Estilos globales

prisma/
└── schema.prisma      # Esquema de base de datos
```

## 🎨 Animaciones Implementadas

- **Navbar**: Slide down, blur en scroll, mobile menu
- **Hero**: Split text, Ken Burns, botón magnético
- **About**: Parallax en imágenes, contador animado
- **Services**: Tarjetas con lift-up hover
- **Works**: Color reveal, mask clip-path
- **Testimonials**: Carrusel, estrellas stagger
- **Blog**: Image zoom hover

## 📝 API Endpoints

### POST /api/appointments
Crea una nueva cita en la base de datos.

**Body:**
```json
{
  "name": "string",
  "email": "string",
  "phone": "string?",
  "service": "string?",
  "date": "ISO date?",
  "message": "string?"
}
```

## 🚀 Deploy en Vercel

### Opción 1: Dashboard
1. Ve a [vercel.com](https://vercel.com)
2. Importa tu repo de GitHub
3. Configura la variable `DATABASE_URL`
4. Deploy!

### Opción 2: CLI
```bash
npm i -g vercel
vercel
```

## ⚙️ Configuración GitHub

El proyecto ya está inicializado con git. Para conectar a tu cuenta:

```bash
# Crear repo en GitHub (si no existe)
gh repo create dental-website --public --source=. --remote=origin

# O conectar repo existente
git remote add origin https://github.com/TU_USUARIO/dental-website.git

# Push inicial
git add .
git commit -m "Initial commit - dental website"
git branch -M main
git push -u origin main
```

## 📝 Personalización

### Cambiar Logo
Reemplaza el texto "LifePath" en:
- `app/sections/Navbar.tsx`
- `app/sections/Footer.tsx`

### Cambiar Colores
Edita los colores en Tailwind:
- Fondos pastel: `#FDF8F3`, `#D4E4D1`, `#E8D5F2`
- Tarjetas: `#F5D5A8`, `#E8D5F2`, `#B8D4E8`

### Agregar Imágenes Reales
Reemplaza las URLs de Unsplash en cada sección con imágenes locales en `public/images/`.

## 📄 Licencia

MIT
