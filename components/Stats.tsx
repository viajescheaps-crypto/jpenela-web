const stats = [
  { value: '3', label: 'MESES DE PLAN' },
  { value: '180€', label: 'ÚNICO PAGO' },
  { value: '60€', label: 'AL MES' },
  { value: 'L–V', label: 'CONTACTO WHATSAPP' },
]

export default function Stats() {
  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4">
        {stats.map((s, i) => (
          <div
            key={i}
            className="flex flex-col items-center justify-center py-8 px-4 border-r border-b md:border-b-0 border-black/10 last:border-r-0"
          >
            <span
              className="text-4xl md:text-5xl text-black leading-none"
              style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
            >
              {s.value}
            </span>
            <span className="text-[10px] tracking-[0.2em] text-black/50 mt-1 text-center">
              {s.label}
            </span>
          </div>
        ))}
      </div>
    </section>
  )
}
