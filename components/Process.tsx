'use client'

import { useTranslation } from '@/lib/LanguageProvider'

export default function Process() {
  const { t } = useTranslation()

  return (
    <section className="relative bg-[#0A0908] py-16 md:py-24 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_50%_100%,_rgba(201,168,116,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{t.process.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              {t.process.titleLine1}<br />
              {t.process.titleLine2}<br />
              <span className="text-brand-accent">{t.process.titleLine3}</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-brand-accent/10">
          {t.process.steps.map((s, i) => (
            <div key={i} className="group bg-[#0A0908] p-8 md:p-10 hover:bg-[#0F0D0B] transition-colors duration-300">
              <span className="block text-brand-accent/40 group-hover:text-brand-accent text-xs font-mono tracking-widest mb-6 transition-colors">
                {String(i + 1).padStart(2, '0')} / 04
              </span>
              <h3 className="text-white font-medium text-lg md:text-xl mb-4">
                {s.title}
              </h3>
              <p className="text-white/50 text-[14px] leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
