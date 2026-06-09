'use client'

import { useTranslation } from '@/lib/LanguageProvider'

export default function Philosophy() {
  const { t } = useTranslation()

  return (
    <section className="bg-[#0A0908] py-28 md:py-40 relative overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_70%_at_50%_50%,_rgba(201,168,116,0.06)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{t.philosophy.eyebrow} 🔪</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              {t.philosophy.titleLine1}<br />
              {t.philosophy.titleLine2}<br />
              <span className="text-brand-accent">{t.philosophy.titleLine3}</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              {t.philosophy.intro}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {t.philosophy.pillars.map((p, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-brand-accent/60 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-12 bg-brand-accent/30 group-hover:bg-brand-accent group-hover:w-16 transition-all duration-500" />
                <span className="text-[11px] tracking-[0.25em] text-brand-accent uppercase font-medium">
                  {p.pillar}
                </span>
              </div>
              <blockquote className="text-white/85 text-xl md:text-2xl font-light leading-snug group-hover:text-white transition-colors duration-500">
                <span className="text-brand-accent/50 text-3xl mr-1 align-top font-serif">"</span>
                {p.quote}
                <span className="text-brand-accent/50 text-3xl ml-0.5 align-top font-serif">"</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
