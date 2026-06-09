const features = [
  {
    title: 'Plan nutricional personalizado',
    desc: 'Ajustado a tus gustos, alergias y al número de comidas que sueles hacer. Sin dietas imposibles de seguir.',
  },
  {
    title: 'Entrenamiento adaptado',
    desc: 'Diseñado en función de tu objetivo, tu nivel actual y los días que puedes entrenar a la semana.',
  },
  {
    title: 'Asesoramiento en suplementación',
    desc: 'Recomendaciones basadas en evidencia, alineadas con tu objetivo y tu presupuesto.',
  },
  {
    title: 'Contacto directo por WhatsApp',
    desc: 'Me escribes tú y te respondo yo — sin intermediarios. Respuesta en menos de 24 horas.',
  },
  {
    title: 'Corrección de ejercicios por vídeo',
    desc: 'Me envías un vídeo de tu técnica y te lo corrijo. O recibes vídeos míos con la ejecución correcta.',
  },
  {
    title: 'Seguimiento y revisión del plan',
    desc: 'Actualizamos tu programa según evolucionas para que nunca te estanques en el proceso.',
  },
]

export default function Plan() {
  return (
    <section id="plan" className="relative bg-[#0a0807] py-28 md:py-40 border-y border-brand-accent/10 overflow-hidden">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_70%_at_80%_20%,_rgba(201,168,116,0.05)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        {/* Encabezado */}
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">El programa</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Todo lo que<br />
              incluye trabajar<br />
              <span className="text-brand-accent">conmigo.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              Un programa pensado para acompañarte de principio a fin. No vas a recibir
              un PDF y desaparecer — vas a tener un seguimiento real, semana a semana,
              hasta que consigas el resultado que buscas.
            </p>
          </div>
        </div>

        {/* Grid de features */}
        <div className="grid md:grid-cols-2 gap-px bg-white/5 border border-white/5">
          {features.map((f, i) => (
            <div
              key={i}
              className="bg-[#0a0a0a] hover:bg-[#111] p-8 md:p-10 transition-colors duration-300 group"
            >
              <div className="flex items-start gap-5">
                <span className="text-brand-accent/70 text-xs font-mono tracking-wider mt-1.5">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <div className="flex-1">
                  <h3 className="text-white font-medium text-lg md:text-xl mb-3 group-hover:translate-x-1 group-hover:text-brand-accent transition-all duration-300">
                    {f.title}
                  </h3>
                  <p className="text-white/50 text-[14px] leading-relaxed font-light">
                    {f.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA inferior */}
        <div className="mt-16 flex flex-col md:flex-row items-center justify-between gap-8 border-t border-white/10 pt-12">
          <div>
            <p className="text-white text-lg md:text-xl font-medium mb-2">
              ¿Quieres entrar al programa 1:1?
            </p>
            <p className="text-white/50 text-sm font-light">
              Cuéntame tu objetivo y diseñamos juntos el plan que necesitas.
            </p>
          </div>
          <a
            href="https://wa.me/34601172353?text=Hola%20Juan%2C%20quiero%20entrar%20en%20el%20programa%201%3A1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-white text-black font-semibold text-[13px] tracking-wide px-8 py-4 hover:bg-white/90 transition-colors whitespace-nowrap"
          >
            <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
            </svg>
            ESCRÍBEME
          </a>
        </div>
      </div>
    </section>
  )
}
