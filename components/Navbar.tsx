'use client'

import { useEffect, useState } from 'react'
import Image from 'next/image'

const links = [
  { label: 'INICIO', href: '#hero' },
  { label: 'SOBRE MÍ', href: '#sobre-mi' },
  { label: 'EL PLAN', href: '#plan' },
  { label: 'TRANSFORMACIONES', href: '#transformaciones' },
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
        scrolled ? 'bg-black/90 backdrop-blur-sm border-b border-white/10' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16 md:h-20">
        {/* Logo */}
        <a href="#hero" className="flex items-center">
          <Image
            src="/images/logo.png"
            alt="Juan Penela"
            width={52}
            height={52}
            className="object-contain"
          />
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs tracking-[0.15em] text-white/70 hover:text-white transition-colors font-medium"
            >
              {link.label}
            </a>
          ))}
        </nav>

        {/* CTA desktop */}
        <a
          href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20personalizado"
          target="_blank"
          rel="noopener noreferrer"
          className="hidden md:inline-flex items-center gap-2 bg-white text-black text-xs font-semibold tracking-[0.15em] px-5 py-2.5 hover:bg-white/90 transition-colors"
        >
          CONTACTAR
        </a>

        {/* Hamburger mobile */}
        <button
          onClick={() => setOpen(!open)}
          className="md:hidden flex flex-col gap-1.5 p-2"
          aria-label="Menú"
        >
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'rotate-45 translate-y-2' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? 'opacity-0' : ''}`} />
          <span className={`block w-6 h-0.5 bg-white transition-all duration-300 ${open ? '-rotate-45 -translate-y-2' : ''}`} />
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-black border-t border-white/10 px-6 py-6 flex flex-col gap-5">
          {links.map(link => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className="text-sm tracking-[0.15em] text-white/80 hover:text-white"
            >
              {link.label}
            </a>
          ))}
          <a
            href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20el%20plan%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 inline-flex justify-center bg-white text-black text-xs font-semibold tracking-[0.15em] px-5 py-3"
          >
            CONTACTAR POR WHATSAPP
          </a>
        </div>
      )}
    </header>
  )
}
