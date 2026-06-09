const photos = Array.from({ length: 17 }, (_, i) => ({
  src: `/images/t${i + 1}.png`,
  label: `Cambio ${String(i + 1).padStart(2, '0')}`,
}))

// Duplicamos la lista para que el bucle sea perfecto (sin saltos)
const loop = [...photos, ...photos]

export default function Transformations() {
  return (
    <section id="transformaciones" className="bg-[#0a0a0a] py-28 md:py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 mb-16">
        <div className="grid md:grid-cols-12 gap-8">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Resultados 🔪</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Personas reales,<br />
              <span className="text-white/40">cambios reales.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              Más de 600 personas ya pasaron por el programa. Cada una de estas
              transformaciones es el resultado de un proceso individualizado:
              plan adaptado, constancia y un seguimiento real en el tiempo.
            </p>
          </div>
        </div>
      </div>

      {/* Marquee infinito */}
      <div className="marquee-wrapper relative overflow-hidden">
        {/* Máscaras laterales para fade out */}
        <div className="absolute left-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-r from-[#0a0a0a] to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-24 md:w-40 bg-gradient-to-l from-[#0a0a0a] to-transparent z-10 pointer-events-none" />

        <div className="marquee-track flex gap-4 md:gap-6">
          {loop.map((p, i) => (
            <div
              key={i}
              className="relative group flex-shrink-0 w-[280px] md:w-[380px] aspect-[4/5] overflow-hidden bg-[#111]"
              aria-hidden={i >= photos.length}
            >
              <img
                src={p.src}
                alt={p.label}
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                loading={i < photos.length ? 'eager' : 'lazy'}
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium tracking-wide">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* CTA inferior */}
      <div className="max-w-7xl mx-auto px-6 md:px-12 mt-16 flex flex-col md:flex-row items-center justify-between gap-6">
        <p className="text-white/50 text-[13px] tracking-wide font-light text-center md:text-left">
          ¿Quieres ser el próximo cambio?
        </p>
        <a
          href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20empezar%20mi%20transformaci%C3%B3n"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 text-white text-[13px] tracking-wide font-medium border-b border-white/30 hover:border-white pb-1 transition-colors"
        >
          ESCRÍBEME
          <svg width="14" height="14" viewBox="0 0 14 14" fill="none">
            <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
          </svg>
        </a>
      </div>
    </section>
  )
}
