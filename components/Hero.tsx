export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[640px] flex items-center overflow-hidden">
      {/* Foto de fondo con zoom */}
      <div className="absolute inset-0 hero-zoom">
        <img
          src="/images/juan-hero.jpg"
          alt="Juan Penela"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/50 via-black/30 to-black" />
      <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-transparent to-transparent" />

      {/* Contenido alineado a la izquierda — más editorial */}
      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 md:px-12">
        <div className="max-w-3xl">
          <p className="fade-up eyebrow mb-6">
            Entrenador Personal — Online
          </p>

          <h1 className="fade-up-delay-1 font-display text-6xl md:text-8xl lg:text-9xl text-white mb-8">
            Juan<br />Penela
          </h1>

          <div className="fade-up-delay-2 flex items-center gap-4 mb-10">
            <div className="h-px w-12 bg-white/40 draw-line" />
            <p className="text-base md:text-lg text-white/75 font-light max-w-xl leading-relaxed">
              Entrenamiento, nutrición y seguimiento diseñados a la medida de tu objetivo.
            </p>
          </div>

          <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-3">
            <a
              href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20m%C3%A1s%20informaci%C3%B3n%20sobre%20tu%20programa"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-[13px] tracking-wide px-7 py-4 hover:bg-white/90 transition-all duration-200"
            >
              SOLICITAR INFORMACIÓN
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
