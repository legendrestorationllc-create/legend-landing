# Legend Restoration LLC — Landing Page

Landing page de producción para Legend Restoration LLC, empresa de roofing en Connecticut.

## Stack

- **Next.js 14** (App Router)
- **TypeScript**
- **Tailwind CSS** + CSS custom properties (design system)
- **Google Maps JavaScript API** + Places API
- **Framer Motion** (animaciones)
- **Sonner** (toast notifications)
- **React Hook Form** (validación de formularios)

## Setup rápido

### 1. Instalar dependencias

```bash
cd legend-restoration
npm install
```

### 2. Variables de entorno

```bash
cp .env.example .env.local
```

Edita `.env.local`:

```
NEXT_PUBLIC_GOOGLE_MAPS_API_KEY=tu_api_key_aqui
NEXT_PUBLIC_WEBHOOK_URL=https://tu-webhook.com/leads
```

### 3. Logo

Coloca el archivo `logo.jpg` en `/public/logo.jpg`.  
(El logo se carga desde `/public/logo.jpg` con `next/image`.)

### 4. Correr en desarrollo

```bash
npm run dev
```

Abre [http://localhost:3000](http://localhost:3000)

### 5. Build de producción

```bash
npm run build
npm run start
```

## Google Maps API

Necesitas una API Key con estas APIs habilitadas:
- **Maps JavaScript API**
- **Places API**

En Google Cloud Console:
1. Crea un proyecto
2. Habilita Maps JavaScript API y Places API
3. Crea una API Key
4. Restricción recomendada: HTTP referrers → `legendrestorationct.com/*`

## Deploy en Vercel

```bash
npm i -g vercel
vercel --prod
```

O conecta el repo en [vercel.com](https://vercel.com) y configura las variables de entorno:
- `NEXT_PUBLIC_GOOGLE_MAPS_API_KEY`
- `NEXT_PUBLIC_WEBHOOK_URL`

## Webhook de leads

Al completar el simulador se envía un `POST` a `NEXT_PUBLIC_WEBHOOK_URL` con:

```json
{
  "nombre": "María González",
  "telefono": "(203) 555-0100",
  "direccion": "123 Main St, Bridgeport, CT",
  "lat": 41.1665,
  "lng": -73.2048,
  "señales": ["s1", "s3"],
  "conocia_ct": "no",
  "antiguedad_techo": "yes",
  "probabilidad": "97%",
  "resultado": "high",
  "timestamp": "2026-05-24T12:00:00.000Z",
  "fuente": "legend-landing"
}
```

Compatible con Make (Integromat), Zapier, n8n, o cualquier endpoint HTTP.

## Estructura

```
/app
  layout.tsx       ← fonts, SEO metadata, Google Maps script
  page.tsx         ← ensamblaje de secciones

/components
  /layout
    Header.tsx     ← sticky header con CTA
    Footer.tsx
  /sections
    Hero.tsx
    TrustBar.tsx
    Stats.tsx
    HowItWorks.tsx
    Simulator.tsx  ← wrapper del quiz
    WhyLegend.tsx
    Testimonials.tsx
    FAQ.tsx        ← accordion
    FinalCTA.tsx
  /simulator
    SimulatorCard.tsx
    StepQ1.tsx / StepQ2.tsx / StepQ3.tsx
    StepLead.tsx
    StepAnalyzing.tsx
    StepResult.tsx
    ProgressBar.tsx
    MicroConfirm.tsx
  /map
    SatelliteMap.tsx

/hooks
  useSimulator.ts  ← estado global del quiz (useReducer)
  useMaps.ts

/types
  simulator.ts

/lib
  constants.ts     ← textos, preguntas, opciones
  webhook.ts       ← envío de leads
```
