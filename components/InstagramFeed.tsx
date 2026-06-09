'use client'

import { useState } from 'react'

// Posts reales extraídos del perfil @jpenela en Instagram
const posts = [
  {
    id: 'DZIZ0Cjo0ld',
    caption: 'Prensa inclinada: cómo hacerla bien',
    type: 'reel',
  },
  {
    id: 'DYjzhUuo49H',
    caption: 'Menos tiempo mirando vidas ajenas',
    type: 'reel',
  },
  {
    id: 'DX9Ao2AoEpM',
    caption: 'Si no sumas, sobras',
    type: 'reel',
  },
  {
    id: 'DLzW0EqI2S0',
    caption: 'Tu cuerpo no cambiará hasta...',
    type: 'reel',
  },
]

export default function InstagramFeed() {
  return (
    <section className="bg-[#0a0a0a] py-28 md:py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-16">
          <div className="md:col-span-7">
            <p className="eyebrow mb-6">En redes 🔪</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Lo último en<br />
              <span className="text-white/40">@jpenela</span>
            </h2>
          </div>
          <div className="md:col-span-4 md:col-start-9 flex items-end">
            <a
              href="https://www.instagram.com/jpenela"
              target="_blank"
              rel="noopener noreferrer"
              className="group inline-flex items-center gap-3 text-white/70 hover:text-white transition-colors"
            >
              <span className="text-[13px] tracking-wide">Seguir en Instagram</span>
              <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
              </svg>
            </a>
          </div>
        </div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-1">
          {posts.map((p) => (
            <InstagramEmbed key={p.id} id={p.id} caption={p.caption} />
          ))}
        </div>

        <div className="mt-12 flex items-center justify-between border-t border-white/10 pt-8">
          <div className="flex items-center gap-6">
            <div>
              <p className="font-display text-3xl text-white">7.2K</p>
              <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase">Seguidores</p>
            </div>
            <div className="h-12 w-px bg-white/10" />
            <div>
              <p className="font-display text-3xl text-white">95</p>
              <p className="text-[11px] tracking-[0.2em] text-white/40 uppercase">Posts</p>
            </div>
          </div>
          <a
            href="https://www.tiktok.com/@jpenela"
            target="_blank"
            rel="noopener noreferrer"
            className="hidden md:inline-flex items-center gap-2 text-[12px] text-white/50 hover:text-white transition-colors"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5.8 20.1a6.34 6.34 0 0 0 10.86-4.43V8.65a8.16 8.16 0 0 0 4.77 1.52V6.73a4.85 4.85 0 0 1-1.84-.04z" />
            </svg>
            <span className="tracking-wide">También en TikTok @jpenela</span>
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
      {/* Overlay clicable con caption en hover */}
      <div className="absolute inset-0 bg-black/0 group-hover:bg-black/40 transition-all duration-300 flex items-end p-5 opacity-0 group-hover:opacity-100">
        <p className="text-white text-[13px] font-medium leading-tight">{caption}</p>
      </div>
    </a>
  )
}
