'use client'

import { useTranslation } from '@/lib/LanguageProvider'

export default function Hero() {
  const { t, lang } = useTranslation()
  const waMsg = lang === 'es'
    ? 'Hola%20Juan%2C%20quiero%20entrar%20en%20el%20programa%201%3A1'
    : 'Hi%20Juan%2C%20I%20want%20to%20join%20your%201%3A1%20program'

  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      <div className="absolute inset-0 hero-zoom">
        <img
          src="/images/juan-hero.png"
          alt="Juan Penela"
          className="w-full h-full object-cover object-top"
        />
      </div>

      <div className="absolute inset-0 bg-gradient-to-b from-[#0A0908]/55 via-[#0A0908]/30 to-[#0A0908]" />
      <div className="absolute inset-0 bg-gradient-to-r from-[#0A0908]/70 via-transparent to-transparent" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_50%_at_20%_50%,_rgba(201,168,116,0.08)_0%,_transparent_70%)]" />

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow mb-6 flex items-center gap-3">
            <span>Juan Penela</span>
            <span className="h-px w-6 bg-brand-accent/60" />
            <span>{t.hero.eyebrow} 🔪</span>
          </p>

          <h1 className="fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-[7.5rem] text-white mb-8">
            {t.hero.titleLine1}<br />{t.hero.titleLine2}<br />
            <span className="text-brand-accent">{t.hero.titleLine3}</span>
          </h1>

          <div className="fade-up-delay-2 flex items-start gap-4 mb-10 max-w-2xl">
            <div className="h-px w-12 bg-brand-accent/60 mt-3 draw-line flex-shrink-0" />
            <p className="text-base md:text-lg text-white/80 font-light leading-relaxed">
              {t.hero.desc}
            </p>
          </div>

          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href={`https://wa.me/34601172353?text=${waMsg}`}
              target="_blank"
              rel="noopener noreferrer"
              className="relative overflow-hidden inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-[13px] tracking-wide px-7 py-4 hover:bg-brand-accent transition-all duration-300 group"
            >
              <span className="relative z-10">{t.hero.cta}</span>
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-[13px] tracking-wide px-7 py-4 hover:border-brand-accent hover:text-brand-accent hover:bg-brand-accent/5 transition-all duration-300"
            >
              {t.hero.ctaSecondary}
            </a>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-brand-accent/60">
        <span className="text-[10px] tracking-[0.3em] font-medium">{t.hero.scroll}</span>
        <div className="w-12 h-px bg-gradient-to-r from-brand-accent/60 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
