const steps = [
  {
    num: '01',
    title: 'Primer contacto',
    desc: 'Me escribes por WhatsApp y me cuentas tu objetivo. Te respondo personalmente.',
  },
  {
    num: '02',
    title: 'Cuestionario inicial',
    desc: 'Te envío un formulario para conocer tus hábitos, horarios y disponibilidad.',
  },
  {
    num: '03',
    title: 'Diseño del plan',
    desc: 'En pocos días recibes tu programa de entrenamiento y nutrición a medida.',
  },
  {
    num: '04',
    title: 'Seguimiento continuo',
    desc: 'Revisamos tu evolución semana a semana y ajustamos el plan según avances.',
  },
]

export default function Process() {
  return (
    <section className="bg-black py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">El proceso</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Cuatro pasos<br />
              para empezar tu<br />
              <span className="text-white/40">transformación.</span>
            </h2>
          </div>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-px bg-white/5">
          {steps.map((s, i) => (
            <div key={i} className="bg-black p-8 md:p-10 hover:bg-[#0a0a0a] transition-colors duration-300">
              <span className="block text-white/20 text-xs font-mono tracking-widest mb-6">
                {s.num} / 04
              </span>
              <h3 className="text-white font-medium text-lg md:text-xl mb-4">
                {s.title}
              </h3>
              <p className="text-white/50 text-[14px] leading-relaxed font-light">
                {s.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
