# Configuración de Base de Datos Neon

## Tu Connection String
```
postgresql://neondb_owner:npg_nSDJizU4F3Wv@ep-frosty-pond-amkz1r8f-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

## Pasos para Configurar

### 1. Verificar que la base de datos está activa
Ve a tu dashboard de Neon y asegúrate de que el proyecto esté activo (no en modo sleep).

### 2. Configurar variable de entorno local
El archivo `.env.local` ya está creado con tu connection string.

### 3. Crear las tablas (en tu computadora local)
```bash
cd C:\ACNIA\DENTALO\dental-website
npx prisma db push
```

Si funciona, verás:
```
🚀  Your database is now in sync with your Prisma schema.
```

### 4. Generar el cliente Prisma
```bash
npx prisma generate
```

### 5. (Opcional) Ver datos con Prisma Studio
```bash
npx prisma studio
```
Abre http://localhost:5555

## Configuración en Vercel (Deploy)

Cuando hagas deploy en Vercel, agrega esta variable de entorno:

**Nombre:** `DATABASE_URL`  
**Valor:** `postgresql://neondb_owner:npg_nSDJizU4F3Wv@ep-frosty-pond-amkz1r8f-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require`

## Troubleshooting

### Error "Can't reach database server"
- La base de datos está en modo sleep en Neon. Ve al dashboard y haz clic en el proyecto para activarlo.
- O espera unos segundos e intenta de nuevo.

### Error "Environment variable not found"
- Asegúrate de tener el archivo `.env.local` en la raíz del proyecto
- O exporta la variable manualmente:
```bash
set DATABASE_URL=postgresql://neondb_owner:npg_nSDJizU4F3Wv@ep-frosty-pond-amkz1r8f-pooler.c-5.us-east-1.aws.neon.tech/neondb?sslmode=require&channel_binding=require
```

### Probar conexión
```bash
npx prisma db pull
```
Si esto funciona, la conexión está correcta.
