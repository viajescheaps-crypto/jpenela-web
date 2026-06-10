'use client'

import { useTranslation } from '@/lib/LanguageProvider'

export default function Plan() {
  const { t } = useTranslation()

  return (
    <section id="plan" className="relative bg-[#0a0807] py-16 md:py-24 border-y border-brand-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_80%_20%,_rgba(201,168,116,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-12">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">{t.plan.eyebrow}</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              {t.plan.titleLine1}<br />
              {t.plan.titleLine2}<br />
              <span className="text-brand-accent">{t.plan.titleLine3}</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              {t.plan.intro}
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {t.plan.features.map((f, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] hover:bg-[#111] p-8 md:p-10 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-brand-accent/70 text-xs font-mono tracking-wider mt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg md:text-xl mb-3 group-hover:translate-x-1 group-hover:text-brand-accent transition-all duration-300">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
          <div>
            <p className="text-white text-lg md:text-xl font-medium mb-2">
              {t.plan.ctaTitle}
            </p>
            <p className="text-white/50 text-sm font-light">
              {t.plan.ctaSub}
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}
