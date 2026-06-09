const stats = [
  { value: '+600', label: 'Personas transformadas', sub: 'Resultados reales y verificables' },
  { value: '100%', label: 'Plan personalizado', sub: 'Sin plantillas ni atajos' },
  { value: '24h', label: 'Respuesta rápida', sub: 'Te respondo en menos de 24h' },
  { value: '1:1', label: 'Asesoría individual', sub: 'Yo escribo, yo respondo' },
]

export default function Stats() {
  return (
    <section className="bg-[#0a0a0a] border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col justify-center py-10 md:py-14 px-2 md:px-6 border-b md:border-b-0 md:border-r border-white/5 last:border-r-0 sm:[&:nth-child(2)]:border-r-0 md:[&:nth-child(2)]:border-r"
          >
            <p className="font-display text-4xl md:text-5xl text-white mb-3 tracking-tight">
              {s.value}
            </p>
            <p className="text-white font-medium text-[14px] mb-1 leading-tight">
              {s.label}
            </p>
            <p className="text-white/40 text-[12px] tracking-wide font-light">
              {s.sub}
            </p>
          </div>
        ))}
      </div>
    </section>
  )
}
