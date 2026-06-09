'use client'

import { useEffect, useState } from 'react'
import { useTranslation } from '@/lib/LanguageProvider'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)
  const { lang, setLang, t } = useTranslation()

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const links = [
    { label: t.nav.home, href: '#hero' },
    { label: t.nav.about, href: '#sobre-mi' },
    { label: t.nav.plan, href: '#plan' },
    { label: t.nav.results, href: '#transformaciones' },
    { label: t.nav.faq, href: '#faq' },
  ]

  const ctaMessage = lang === 'es'
    ? 'Hola%20Juan%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20programa'
    : 'Hi%20Juan%2C%20I%27d%20like%20more%20info%20about%20your%20program'

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#0A0908]/85 backdrop-blur-md border-b border-brand-accent/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <img
            src="/images/logo-nombre.jpeg"
            alt="Juan Penela"
            className="h-10 md:h-12 w-auto object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/65 hover:text-brand-accent transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* Language switcher + CTA desktop */}
        <div className="hidden md:flex items-center gap-4">
          <LangSwitcher lang={lang} setLang={setLang} />
          <a
            href={`https://wa.me/34601172353?text=${ctaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-white text-black text-[12px] font-semibold tracking-wide px-5 py-2.5 hover:bg-brand-accent transition-colors"
          >
            {t.nav.cta}
          </a>
        </div>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-1.5' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-px bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-1.5' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-[#0A0908] border-t border-brand-accent/10 px-6 py-8 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/80 hover:text-brand-accent font-medium"
            >
              {link.label}
            </a>
          ))}
          <div className="pt-2">
            <LangSwitcher lang={lang} setLang={setLang} />
          </div>
          <a
            href={`https://wa.me/34601172353?text=${ctaMessage}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center bg-white text-black text-[12px] font-semibold tracking-wide px-5 py-3 hover:bg-brand-accent transition-colors"
          >
            {t.nav.ctaMobile}
          </a>
        </div>
      )}
    </header>
  )
}

function LangSwitcher({ lang, setLang }: { lang: 'es' | 'en'; setLang: (l: 'es' | 'en') => void }) {
  return (
    <div className="inline-flex items-center border border-white/15 text-[11px] tracking-wider font-medium">
      <button
        onClick={() => setLang('es')}
        aria-pressed={lang === 'es'}
        className={`px-2.5 py-1 transition-colors ${
          lang === 'es' ? 'bg-brand-accent text-black' : 'text-white/60 hover:text-white'
        }`}
      >
        ES
      </button>
      <button
        onClick={() => setLang('en')}
        aria-pressed={lang === 'en'}
        className={`px-2.5 py-1 transition-colors ${
          lang === 'en' ? 'bg-brand-accent text-black' : 'text-white/60 hover:text-white'
        }`}
      >
        EN
      </button>
    </div>
  )
}
