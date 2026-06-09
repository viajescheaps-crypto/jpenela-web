'use client'

import { useState } from 'react'

const faqs = [
  {
    q: '¿En qué consiste exactamente el programa?',
    a: 'Recibirás un plan de entrenamiento semanal y un plan nutricional, ambos diseñados específicamente para ti. Incluye seguimiento continuo vía WhatsApp, corrección de ejercicios por vídeo y actualizaciones del plan según tu progreso.',
  },
  {
    q: '¿Necesito ir al gimnasio para entrenar?',
    a: 'No es imprescindible. El plan se adapta a tus circunstancias. Si tienes acceso a gimnasio, lo aprovechamos al máximo. Si entrenas en casa, diseñamos las rutinas con ese material. Cuéntame tu situación y lo ajustamos.',
  },
  {
    q: '¿Cómo es la comunicación durante el proceso?',
    a: 'Toda la comunicación se gestiona a través de WhatsApp. Me escribes tú directamente y te respondo yo, sin chatbots ni intermediarios. Respuesta en menos de 24 horas.',
  },
  {
    q: '¿Qué pasa si no veo resultados?',
    a: 'El plan se revisa y se actualiza en función de tu progreso real. Si algo no está funcionando, lo identificamos juntos y lo ajustamos. El seguimiento continuo existe precisamente para que eso no ocurra.',
  },
  {
    q: '¿Cuánto tardo en recibir mi plan?',
    a: 'Una vez que rellenas el cuestionario inicial con tus datos, tendrás tu plan completamente personalizado en pocos días. A partir de ese momento, el seguimiento es inmediato.',
  },
  {
    q: '¿Cómo solicito más información?',
    a: 'Lo más sencillo es escribirme directamente por WhatsApp. Te explico el programa, resuelvo cualquier duda y vemos juntos si encaja con tu objetivo, sin compromiso.',
  },
]

function FAQItem({ q, a, idx }: { q: string; a: string; idx: number }) {
  const [open, setOpen] = useState(false)
  return (
    <div className="border-b border-white/10">
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between py-7 text-left gap-6 group"
      >
        <div className="flex items-center gap-6 flex-1">
          <span className="text-brand-accent/60 group-hover:text-brand-accent text-xs font-mono tracking-wider transition-colors">
            {String(idx + 1).padStart(2, '0')}
          </span>
          <span className="text-[15px] md:text-base text-white/85 group-hover:text-white transition-colors font-medium">
            {q}
          </span>
        </div>
        <span className={`flex-shrink-0 w-7 h-7 flex items-center justify-center border border-brand-accent/30 group-hover:border-brand-accent transition-all duration-300 ${open ? 'rotate-45 bg-brand-accent/10' : ''}`}>
          <svg width="10" height="10" viewBox="0 0 10 10" fill="none">
            <path d="M5 1v8M1 5h8" stroke="currentColor" strokeWidth="1.2" className="text-white" />
          </svg>
        </span>
      </button>
      <div className={`grid transition-all duration-500 ease-in-out ${open ? 'grid-rows-[1fr] opacity-100 pb-7' : 'grid-rows-[0fr] opacity-0'}`}>
        <div className="overflow-hidden">
          <p className="text-[14px] md:text-[15px] text-white/55 leading-relaxed font-light pl-12 pr-10">
            {a}
          </p>
        </div>
      </div>
    </div>
  )
}

export default function FAQ() {
  return (
    <section id="faq" className="relative bg-[#0A0908] py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_50%_at_50%_0%,_rgba(201,168,116,0.04)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-4xl mx-auto px-6 md:px-12">
        <div className="mb-16">
          <p className="eyebrow mb-6">Preguntas frecuentes</p>
          <h2 className="font-display text-4xl md:text-6xl text-white">
            Las dudas más<br />
            <span className="text-brand-accent">habituales.</span>
          </h2>
        </div>

        <div>
          {faqs.map((f, i) => (
            <FAQItem key={i} q={f.q} a={f.a} idx={i} />
          ))}
        </div>
      </div>
    </section>
  )
}
