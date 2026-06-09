const stats = [
  { label: 'Planes 100% personalizados', sub: 'Sin plantillas genéricas' },
  { label: 'Seguimiento continuo', sub: 'Vía WhatsApp L–V · 8h a 19h' },
  { label: 'Corrección por vídeo', sub: 'Técnica revisada uno a uno' },
  { label: 'Actualización del plan', sub: 'Según tu progreso real' },
]

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col justify-center py-10 md:py-12 px-2 md:px-6 border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 last:border-b-0"
          >
            <p className="text-white font-medium text-[15px] leading-tight mb-1.5">
              {s.label}
            </p>
            <p className="text-white/40 text-[12px] tracking-wide">
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
