'use client'

import { useTranslation } from '@/lib/LanguageProvider'

export default function About() {
  const { t } = useTranslation()

  return (
    <section id="sobre-mi" className="relative bg-[#0A0908] py-28 md:py-40 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_15%_50%,_rgba(201,168,116,0.06)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Foto */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#111]">
            <img
              src="/images/juan-hero.png"
              alt="Juan Penela"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-black p-3 border border-white/10 overflow-hidden">
            <video
              src="/video/logo-anim.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-16 h-16 object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-7 md:pl-8">
          <p className="eyebrow mb-6">{t.about.eyebrow}</p>

          <h2 className="font-display text-4xl md:text-6xl text-white mb-10">
            {t.about.titleLine1}<br />
            <span className="text-brand-accent">{t.about.titleLine2}</span>
          </h2>

          <div className="space-y-5 text-white/65 leading-relaxed text-[15px] md:text-base font-light max-w-2xl">
            <p>{t.about.p1}</p>
            <p>{t.about.p2}</p>
            <p>{t.about.p3}</p>
          </div>

          <div className="mt-12 relative overflow-hidden border border-brand-accent/15 max-w-xl group">
            <img
              src="/images/about-feature.jpg"
              alt="Juan Penela"
              className="w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0A0908]/40 via-transparent to-transparent pointer-events-none" />
          </div>
        </div>
      </div>
    </section>
  )
}
