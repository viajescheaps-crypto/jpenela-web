'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/LanguageProvider'
import type { LifeProOffer } from '@/lib/lifepro'

const FALLBACK_URL =
  'https://www.lifepronutrition.com/es/?codigo=JPENELA&utm_source=jpenela_web&utm_medium=referral&utm_content=banner_home'

export default function LifeProBanner() {
  const { t } = useTranslation()
  const [offer, setOffer] = useState<LifeProOffer | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/lifepro')
      .then(r => (r.ok ? r.json() : null))
      .then(data => {
        if (active && data) setOffer(data)
      })
      .catch(() => {})
    return () => {
      active = false
    }
  }, [])

  const url = offer?.url ?? FALLBACK_URL

  return (
    <section className="bg-[#0A0908] border-y border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-14 md:py-20">
        {/* Cabecera editorial */}
        <div className="flex items-center gap-3 mb-8">
          <span className="h-px w-12 bg-brand-accent/60" />
          <span className="text-[10px] tracking-[0.3em] text-brand-accent font-medium uppercase">
            {t.lifepro.sponsored}
          </span>
          <span className="h-px flex-1 bg-brand-accent/15" />
        </div>

        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block"
        >
          <div className="grid md:grid-cols-12 gap-10 md:gap-14 items-center">
            {/* Logo */}
            <div className="md:col-span-4 flex items-center justify-center md:justify-start">
              <img
                src="/images/lifepro.png"
                alt="LifePro Nutrition"
                className="w-full max-w-[280px] md:max-w-[340px] h-auto object-contain transition-transform duration-500 group-hover:scale-[1.03]"
              />
            </div>

            {/* Contenido editorial */}
            <div className="md:col-span-8 md:border-l border-brand-accent/15 md:pl-10">
              <p className="text-[11px] tracking-[0.25em] text-white/40 uppercase mb-4 font-medium">
                Partner oficial
              </p>

              <h3 className="font-display text-3xl md:text-5xl text-white leading-[1.05] mb-6">
                La suplementación<br />
                <span className="text-brand-accent">que confío.</span>
              </h3>

              <p className="text-white/60 text-[15px] md:text-base leading-relaxed font-light mb-8 max-w-xl">
                {t.lifepro.desc}
              </p>

              <div className="flex flex-col sm:flex-row sm:items-center gap-5 sm:gap-8">
                {/* Código destacado */}
                <div className="inline-flex items-stretch">
                  <span className="bg-brand-accent/10 border border-brand-accent/30 border-r-0 px-4 py-3 text-[10px] tracking-[0.25em] text-white/50 uppercase flex items-center font-medium">
                    {t.lifepro.code}
                  </span>
                  <span className="bg-brand-accent text-black px-5 py-3 font-mono font-bold tracking-[0.2em] text-sm flex items-center group-hover:bg-white transition-colors duration-300">
                    JPENELA
                  </span>
                </div>

                {/* CTA con flecha */}
                <span className="inline-flex items-center gap-3 text-[13px] tracking-[0.15em] text-white/80 group-hover:text-brand-accent font-medium uppercase transition-colors duration-300">
                  {t.lifepro.cta}
                  <span className="relative w-10 h-px bg-brand-accent/60 group-hover:bg-brand-accent transition-all duration-300 group-hover:w-14">
                    <span className="absolute -right-0.5 -top-1 w-2 h-2 border-t border-r border-brand-accent/60 group-hover:border-brand-accent rotate-45 transition-colors" />
                  </span>
                </span>
              </div>
            </div>
          </div>
        </a>

        {/* Footer fino */}
        <div className="mt-10 pt-6 border-t border-brand-accent/10 flex items-center justify-between text-[10px] tracking-[0.25em] text-white/30 uppercase">
          <span>LifePro Nutrition · Premium Quality</span>
          <span className="hidden sm:inline">Anuncio · Patrocinado</span>
        </div>
      </div>
    </section>
  )
}
