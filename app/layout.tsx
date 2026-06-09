import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Juan Penela | Entrenador Personal Online',
  description: 'Plan personalizado de entrenamiento y nutrición con seguimiento completo vía WhatsApp. Transforma tu cuerpo con un plan 100% adaptado a ti.',
  openGraph: {
    title: 'Juan Penela | Entrenador Personal Online',
    description: 'Transforma tu cuerpo con un plan 100% personalizado. Entrenamiento + nutrición + seguimiento vía WhatsApp.',
    type: 'website',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es">
      <body>{children}</body>
    </html>
  )
}
