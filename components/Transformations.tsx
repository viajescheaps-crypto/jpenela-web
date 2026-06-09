const photos = [
  { src: '/images/t1.jpg', label: 'Recomposición corporal' },
  { src: '/images/t2.jpg', label: 'Pérdida de grasa' },
  { src: '/images/t3.jpg', label: 'Definición femenina' },
  { src: '/images/t4.jpg', label: 'Ganancia muscular' },
  { src: '/images/t5.jpg', label: 'Definición masculina' },
]

export default function Transformations() {
  return (
    <section id="transformaciones" className="bg-black py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-4">RESULTADOS REALES</p>
          <h2
            className="text-5xl md:text-7xl leading-none uppercase"
            style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
          >
            TRANSFORMACIONES
          </h2>
          <p className="text-white/50 text-sm mt-4 max-w-md mx-auto leading-relaxed">
            Personas reales con planes personalizados. Resultados conseguidos con constancia y seguimiento continuo.
          </p>
        </div>

        {/* Grid asimétrico: 3 columnas en desktop, 2 en tablet */}
        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden ${i === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className={`${i === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-[4/5]'} overflow-hidden`}>
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-500"
                />
              </div>
              {/* Overlay con label */}
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/30 transition-all duration-300 flex items-end">
                <span className="w-full text-center text-white text-xs tracking-[0.15em] py-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300 bg-black/60">
                  {p.label.toUpperCase()}
                </span>
              </div>
            </div>
          ))}
        </div>

        <p className="text-center text-white/30 text-xs tracking-[0.15em] mt-8">
          ¿QUIERES SER EL PRÓXIMO? →{' '}
          <a
            href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20empezar%20mi%20transformaci%C3%B3n"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white underline underline-offset-4 hover:text-white/70 transition-colors"
          >
            EMPIEZA HOY
          </a>
        </p>
      </div>
    </section>
  )
}
