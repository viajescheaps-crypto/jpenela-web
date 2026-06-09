'use client'

import { useState } from 'react'
import { useTranslation } from '@/lib/LanguageProvider'

// Posts reales extraídos del perfil @jpenela en Instagram
const posts = [
  { id: 'DZIZ0Cjo0ld', captionEs: 'Prensa inclinada: cómo hacerla bien', captionEn: 'Incline press: how to do it right' },
  { id: 'DYjzhUuo49H', captionEs: 'Menos tiempo mirando vidas ajenas', captionEn: 'Less time watching other lives' },
  { id: 'DX9Ao2AoEpM', captionEs: 'Si no sumas, sobras', captionEn: "If you don't add up, you're left out" },
  { id: 'DLzW0EqI2S0', captionEs: 'Tu cuerpo no cambiará hasta...', captionEn: "Your body won't change until..." },
]

export default function InstagramFeed() {
  const { t, lang } = useTranslation()

  return (
    <section className="relative bg-[#0a0807] py-28 md:py-40 border-y border-brand-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_30%_50%_at_85%_50%,_rgba(201,168,116,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">{t.instagram.eyebrow} 🔪</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              {t.instagram.titleLine1}<br />
              <span className="text-brand-accent">{t.instagram.titleLine2}</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <a
              href="https://www.instagram.com/jpenela"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white/70 hover:text-brand-accent transition-colors"
            >
              <span className="text-[13px] tracking-wide">{t.instagram.follow}</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {posts.map((p) => (
            <InstagramEmbed key={p.id} id={p.id} caption={lang === 'es' ? p.captionEs : p.captionEn} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-display text-3xl text-brand-accent">7.2K</p>
              <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase">{t.instagram.followers}</p>
            </div>
            <div className="h-12 w-px bg-brand-accent/20" />
            <div>
              <p className="font-display text-3xl text-brand-accent">95</p>
              <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase">{t.instagram.posts}</p>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/@jpenela"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[12px] text-white/50 hover:text-brand-accent transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.65a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z" />
            </svg>
            <span className="tracking-wide">{t.instagram.tiktok}</span>
          </a>
        </div>
      </div>
    </section>
  )
}

function InstagramEmbed({ id, caption }: { id: string; caption: string }) {
  const [loaded, setLoaded] = useState(false)

  return (
    <a
      href={`https://www.instagram.com/p/${id}/`}
      target="_blank"
      rel="noopener noreferrer"
      className="relative aspect-[9/16] bg-[#111] overflow-hidden group block"
    >
      {!loaded && (
        <div className="absolute inset-0 flex items-center justify-center text-white/20 text-xs tracking-wider">
          @jpenela
        </div>
      )}
      <iframe
        src={`https://www.instagram.com/p/${id}/embed/?cr=1&v=14&wp=540&rd=https%3A%2F%2Fjpenela-web.vercel.app`}
        className="w-full h-full border-0 pointer-events-none"
        scrolling="no"
        allowTransparency
        onLoad={() => setLoaded(true)}
      />
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
        <p className="text-white text-[13px] font-medium leading-tight">{caption}</p>
      </div>
    </a>
  )
}
