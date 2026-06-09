export default function Hero() {
  return (
    <section id="hero" className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
      {/* Foto de fondo con zoom */}
      <div className="absolute inset-0 hero-zoom">
        <img
          src="/images/juan-hero.jpg"
          alt="Juan Penela"
          className="w-full h-full object-cover object-top"
        />
      </div>

      {/* Overlay oscuro degradado */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-black" />

      {/* Contenido */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        <p className="fade-up text-xs md:text-sm tracking-[0.3em] text-white/60 mb-4 uppercase">
          Entrenador Personal Online
        </p>
        <h1
          className="fade-up-delay-1 font-heading text-7xl md:text-[10rem] leading-none tracking-wide uppercase text-white"
          style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
        >
          JUAN PENELA
        </h1>
        <p className="fade-up-delay-2 text-base md:text-xl text-white/75 mt-4 mb-10 font-light tracking-wide max-w-xl mx-auto">
          Transforma tu cuerpo con un plan 100% personalizado.<br />
          Entrenamiento · Nutrición · Seguimiento vía WhatsApp.
        </p>

        <div className="fade-up-delay-3 flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20empezar%20mi%20plan%20personalizado"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 bg-white text-black font-semibold text-sm tracking-[0.15em] px-8 py-4 hover:bg-white/90 transition-colors"
          >
            <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            EMPEZAR AHORA
          </a>
          <a
            href="#plan"
            className="inline-flex items-center justify-center gap-2 border border-white text-white font-semibold text-sm tracking-[0.15em] px-8 py-4 hover:bg-white hover:text-black transition-colors"
          >
            VER EL PLAN
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-white/40">
        <span className="text-[10px] tracking-[0.2em]">SCROLL</span>
        <div className="w-px h-10 bg-gradient-to-b from-white/40 to-transparent animate-pulse" />
      </div>
    </section>
  )
}
