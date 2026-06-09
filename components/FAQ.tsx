'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿En qué consiste el plan exactamente?',
    a: 'Recibirás un plan de entrenamiento semanal y un plan nutricional, ambos personalizados para ti. Incluye seguimiento continuo vía WhatsApp, corrección de ejercicios por vídeo y actualizaciones según tu progreso.',
  },
  {
    q: '¿Necesito ir al gimnasio?',
    a: 'El plan se adapta a tus circunstancias. Si tienes gimnasio, lo aprovechamos al máximo. Si entrenas en casa, diseñamos las rutinas para ello. Cuéntame tu situación y lo ajustamos.',
  },
  {
    q: '¿Cómo me contactas y cómo te contacto yo?',
    a: 'Todo se gestiona por WhatsApp. Puedes escribirme de lunes a viernes de 8:00 a 19:00. Te respondo en el menor tiempo posible y hacemos el seguimiento por ese mismo canal.',
  },
  {
    q: '¿Qué pasa si no veo resultados?',
    a: 'El plan se actualiza según tu progreso real. Si algo no está funcionando, lo identificamos juntos y ajustamos. El seguimiento continuo es precisamente para que eso no pase.',
  },
  {
    q: '¿Cuándo recibo el plan tras el pago?',
    a: 'Una vez que me contactas y rellenas el cuestionario inicial, tendrás tu plan personalizado en pocos días. A partir de ahí, el seguimiento es inmediato.',
  },
  {
    q: '¿El precio incluye los 3 meses completos?',
    a: 'Sí. Los 180€ son un único pago que cubre los 3 meses completos de plan + seguimiento + actualizaciones. Sin cuotas mensuales ni sorpresas.',
  },
]

function FAQItem({ q, a }: { q: string; a: string }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-6 text-left gap-4 group"
      >
        <span className="text-sm md:text-base text-white/80 group-hover:text-white transition-colors tracking-wide">
          {q}
        </span>
        <span className={`flex-shrink-0 w-6 h-6 flex items-center justify-center border border-white/20 transition-transform duration-300 ${open ? 'rotate-45' : ''}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="white" strokeWidth="1.2" strokeLinecap="square"/>
          </svg>
        </span>
      </button>
      {open && (
        <p className="pb-6 text-sm text-white/50 leading-relaxed pr-10">{a}</p>
      )}
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-4">PREGUNTAS FRECUENTES</p>
          <h2
            className="text-5xl md:text-7xl leading-none uppercase"
            style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
          >
            TIENES DUDAS
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} />
          ))}
        </div>
      </div>
    </section>
  )
}
