const steps = [
  {
    num: '01',
    title: 'CONTACTO',
    desc: 'Escríbeme por WhatsApp y cuéntame tu objetivo. Te respondo en menos de 24 horas.',
  },
  {
    num: '02',
    title: 'CUESTIONARIO',
    desc: 'Te mando un formulario para conocer tus gustos, horarios, nivel físico y disponibilidad.',
  },
  {
    num: '03',
    title: 'TU PLAN',
    desc: 'En pocos días recibes tu plan de entrenamiento y nutrición 100% personalizado.',
  },
  {
    num: '04',
    title: 'EVOLUCIÓN',
    desc: 'Seguimiento continuo. Actualizamos el plan con tu progreso para que nunca te estanques.',
  },
]

export default function Process() {
  return (
    <section className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-xs tracking-[0.3em] text-white/40 mb-4">EL PROCESO</p>
          <h2
            className="text-5xl md:text-7xl leading-none uppercase"
            style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
          >
            ASÍ FUNCIONA
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
          {steps.map((s, i) => (
            <div key={i} className="bg-[#111111] p-8 md:p-10 hover:bg-[#1a1a1a] transition-colors">
              <span
                className="text-6xl text-white/10 leading-none block mb-6"
                style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
              >
                {s.num}
              </span>
              <h3
                className="text-2xl text-white mb-3 uppercase"
                style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
              >
                {s.title}
              </h3>
              <p className="text-white/55 text-sm leading-relaxed">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
