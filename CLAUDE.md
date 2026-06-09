# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

**Juan Penela** — landing/web para un entrenador personal y nutricionista. El objetivo principal de la web es convertir visitantes en clientes presentando sus servicios y facilitando el contacto.

### Servicios que ofrece el cliente

- Plan nutricional personalizado (ajustado a gustos y número de comidas)
- Plan de entrenamiento adaptado (objetivo + días disponibles)
- Asesoramiento en suplementación deportiva
- Contacto por WhatsApp (L–V, 8:00–19:00)
- Corrección de ejercicios por vídeo (el cliente envía o recibe vídeos)
- Seguimiento y actualización del plan según el progreso

Todo el servicio se gestiona **vía WhatsApp**.

## Stack

- **Framework:** Next.js (App Router)
- **Despliegue:** Vercel
- **Base de datos / backend:** Supabase
- **Control de versiones:** GitHub

## Variables de entorno

Las credenciales de despliegue viven en `env.local` (nunca subir al repo):

```
SUPABASE_ACCESS_TOKEN   # Token de acceso a Supabase (solo scripts de servidor)
VERCEL_TOKEN            # Token de despliegue en Vercel (solo scripts de servidor)
GITHUB_TOKEN            # PAT de GitHub (solo scripts de servidor)
```

Crear un `.env.local` separado para las variables que consume la app en tiempo de ejecución (claves públicas de Supabase, etc.).

## Comandos

```bash
npm run dev       # Servidor de desarrollo en localhost:3000
npm run build     # Build de producción
npm run start     # Arranca el build de producción localmente
npm run lint      # ESLint
```

## Arquitectura prevista

La web es principalmente un **sitio de marketing + captación** con integración directa a WhatsApp. Estructura recomendada con App Router:

```
app/
  layout.tsx          # Layout raíz (fuente, metadata global)
  page.tsx            # Landing principal
  components/         # Componentes reutilizables (Hero, Servicios, CTA, etc.)
lib/
  supabase.ts         # Cliente de Supabase (si se usa para leads/formularios)
public/               # Imágenes, fotos del entrenador, vídeos cortos
```

## Identidad visual

### Logo
- Monograma "JP" entrelazado con una espada horizontal atravesando la J
- Blanco puro sobre negro puro — identidad estrictamente **blanco/negro**, sin colores adicionales
- Tipografía geométrica, angular, sin redondeos → refuerza `border-radius: 0` en toda la UI
- Existe versión **animada** del logo → usarla como loader de página o en el hero

### Paleta de colores
```
Background:     #000000   (negro puro)
Foreground:     #FFFFFF   (blanco puro)
Surface:        #111111   (cards/secciones elevadas)
Text muted:     rgba(255,255,255,0.55)
Accent/CTA:     #FFFFFF   (botones primarios en blanco con texto negro)
Border:         rgba(255,255,255,0.12)
```

### Tipografía
- **Headings:** Bebas Neue o Barlow Condensed Bold (libre, mismo espíritu que Gill Sans Heavy)
- **Body:** Inter o Source Sans Pro
- Títulos en mayúsculas con `letter-spacing` amplio

### Archivos de imágenes (`public/images/`)
- `logo.png` — logo JP blanco sobre transparente (para el navbar)
- `logo-black.png` — logo JP negro sobre transparente (si se necesita sobre fondo claro)
- `logo-animated.gif` / `logo-animated.webm` — versión animada (loader o hero)
- `juan-hero.jpg` — foto del entrenador posando (fondo gris estudio) → hero con overlay `rgba(0,0,0,0.55)`
- `t1.jpg` → `t6.jpg` — fotos de transformaciones de clientes

### Estilo general
- Sin `border-radius` en ningún elemento (0px)
- Hero: foto de Juan a pantalla completa + overlay oscuro + zoom suave al cargar
- Nav fija que añade `background: rgba(0,0,0,0.9)` + `backdrop-filter: blur` al hacer scroll
- Botón primario: fondo blanco, texto negro, sin radio
- Botón secundario: borde blanco 1px, texto blanco, fondo transparente

## Notas de diseño y contenido

- El CTA principal debe dirigir al **WhatsApp** de Juan Penela.
- Los servicios deben quedar visualmente claros (cards o sección diferenciada).
- Incluir sección de **seguimiento/proceso** para transmitir compromiso a largo plazo.
- El tono debe ser cercano, motivador y profesional — entrenador personal, no gimnasio corporativo.
- La comunicación es humana, sin IA. No incluir chatbots ni respuestas automáticas.
