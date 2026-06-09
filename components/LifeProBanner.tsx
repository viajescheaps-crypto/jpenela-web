'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/LanguageProvider'
import type { LifeProOffer } from '@/lib/lifepro'

const FALLBACK_URL = 'https://www.lifepronutrition.com/es/?codigo=JPENELA&utm_source=jpenela_web&utm_medium=referral&utm_content=banner_home'

export default function LifeProBanner() {
  const { t } = useTranslation()
  const [offer, setOffer] = useState<LifeProOffer | null>(null)

  useEffect(() => {
    let active = true
    fetch('/api/lifepro')
      .then(r => r.ok ? r.json() : null)
      .then(data => { if (active && data) setOffer(data) })
      .catch(() => {})
    return () => { active = false }
  }, [])

  const url = offer?.url ?? FALLBACK_URL
  const image = offer?.image ?? null

  return (
    <section className="bg-[#0A0908] border-y border-brand-accent/10">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center border border-white/10 hover:border-brand-accent/40 p-6 md:p-10 transition-all duration-500 hover:bg-[#0a0807]">
            {image ? (
              <div className="md:col-span-3 aspect-square overflow-hidden bg-[#0a0a0a]">
                <img
                  src={image}
                  alt="LifePro Nutrition"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="md:col-span-3 aspect-square flex items-center justify-center bg-[#0a0a0a] border border-white/10">
                <span className="font-display text-5xl text-white">LIFE<br />PRO</span>
              </div>
            )}

            <div className="md:col-span-9">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.3em] text-brand-accent font-medium uppercase">
                  {t.lifepro.sponsored}
                </span>
                <span className="h-px w-8 bg-brand-accent/40" />
                <span className="text-[10px] tracking-[0.2em] text-white/40 font-medium">
                  {t.lifepro.brand}
                </span>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-medium leading-tight mb-3 group-hover:text-brand-accent transition-colors duration-500">
                {t.lifepro.title}
              </h3>
              <p className="text-white/55 text-[14px] md:text-[15px] leading-relaxed font-light mb-6 max-w-2xl">
                {t.lifepro.desc}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="inline-flex items-center gap-3 border border-brand-accent/40 px-4 py-2 group-hover:border-brand-accent transition-colors">
                  <span className="text-[10px] tracking-[0.2em] text-white/40">{t.lifepro.code}</span>
                  <span className="font-mono text-brand-accent font-semibold tracking-wider">JPENELA</span>
                </div>
                <span className="text-[13px] text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                  {t.lifepro.cta}
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
