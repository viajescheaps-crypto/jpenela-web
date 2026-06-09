'use client'

import { useEffect, useState } from 'react'

const links = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre mí', href: '#sobre-mi' },
  { label: 'Programa', href: '#plan' },
  { label: 'Resultados', href: '#transformaciones' },
  { label: 'FAQ', href: '#faq' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 60)
    window.addEventListener('scroll', onScroll)
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-black/85 backdrop-blur-md border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center gap-3">
          <img
            src="/images/logo.png"
            alt="Juan Penela"
            className="h-9 w-auto object-contain"
          />
          <span className="hidden sm:inline text-white text-[13px] tracking-[0.15em] font-medium">
            JUAN PENELA
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-9">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-[13px] text-white/65 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="https://wa.me/34601172353?text=Hola%20Juan%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20programa"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-white text-black text-[12px] font-semibold tracking-wide px-5 py-2.5 hover:bg-white/90 transition-colors"
        >
          CONTACTAR
        </a>

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
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-8 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm text-white/80 hover:text-white font-medium"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/34601172353?text=Hola%20Juan%2C%20me%20gustar%C3%ADa%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20programa"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center bg-white text-black text-[12px] font-semibold tracking-wide px-5 py-3"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </div>
      )}
    </header>
  )
}
