const photos = [
  { src: '/images/t1.jpg', label: 'Recomposición corporal' },
  { src: '/images/t2.jpg', label: 'Pérdida de grasa' },
  { src: '/images/t3.jpg', label: 'Definición femenina' },
  { src: '/images/t4.jpg', label: 'Ganancia muscular' },
  { src: '/images/t5.jpg', label: 'Definición masculina' },
]

export default function Transformations() {
  return (
    <section id="transformaciones" className="bg-[#0a0a0a] py-28 md:py-40 border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Resultados</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Personas reales,<br />
              <span className="text-white/40">cambios reales.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              Cada una de estas transformaciones es el resultado de un proceso
              individualizado: un plan adaptado, constancia y un seguimiento real
              en el tiempo. No hay trucos ni atajos.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-1">
          {photos.map((p, i) => (
            <div
              key={i}
              className={`relative group overflow-hidden ${i === 0 ? 'md:row-span-2' : ''}`}
            >
              <div className={`${i === 0 ? 'aspect-[3/4] md:h-full' : 'aspect-[4/5]'} overflow-hidden bg-[#111]`}>
                <img
                  src={p.src}
                  alt={p.label}
                  className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
              <div className="absolute bottom-0 left-0 right-0 p-5 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300">
                <p className="text-white text-sm font-medium">{p.label}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
