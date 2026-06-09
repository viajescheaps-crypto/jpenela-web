export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Foto de fondo con zoom */}
      <div className="absolute inset-0 hero-zoom">
        <img
          src="/images/juan-hero.png"
          alt="Juan Penela"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/55 via-black/35 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-transparent to-transparent" />

      {/* Contenido alineado a la izquierda */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow mb-6 flex items-center gap-3">
            <span>Juan Penela</span>
            <span className="h-px w-6 bg-white/30" />
            <span>Coach 1:1 🔪</span>
          </p>

          <h1 className="fade-up-delay-1 font-display text-5xl md:text-7xl lg:text-[7.5rem] text-white mb-8">
            No vendo<br />plantillas.<br />
            <span className="text-white/40">Construyo físicos.</span>
          </h1>

          <div className="fade-up-delay-2 flex items-start gap-4 mb-10 max-w-2xl">
            <div className="h-px w-12 bg-white/40 mt-3 draw-line flex-shrink-0" />
            <p className="text-base md:text-lg text-white/75 font-light leading-relaxed">
              +600 personas ya transformaron su físico conmigo. Sin atajos, sin
              promesas vacías — solo trabajo real, plan a medida y mentalidad.
            </p>
          </div>

          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20entrar%20en%20el%20programa%201%3A1"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-[13px] tracking-wide px-7 py-4 hover:bg-white/90 transition-all duration-200"
            >
              ESCRÍBEME
            </a>
            <a
              href="#sobre-mi"
              className="inline-flex items-center justify-center gap-2 border border-white/30 text-white font-medium text-[13px] tracking-wide px-7 py-4 hover:border-white hover:bg-white/5 transition-all duration-200"
            >
              CONOCER EL MÉTODO
            </a>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 right-8 md:right-12 flex items-center gap-3 text-white/40">
        <span className="text-[10px] tracking-[0.3em] font-medium">SCROLL</span>
        <div className="w-12 h-px bg-gradient-to-r from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
