export default function About() {
  return (
    <section id="sobre-mi" className="bg-black py-28 md:py-40">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Foto */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#111]">
            <img
              src="/images/juan-hero.jpg"
              alt="Juan Penela"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-black p-4 border border-white/10">
            <img src="/images/logo.png" alt="JP" className="w-14 h-14 object-contain" />
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-7 md:pl-8">
          <p className="eyebrow mb-6">Sobre mí</p>

          <h2 className="font-display text-4xl md:text-6xl text-white mb-10">
            Un método pensado<br />
            <span className="text-white/40">para personas reales.</span>
          </h2>

          <div className="space-y-5 text-white/65 leading-relaxed text-[15px] md:text-base font-light max-w-2xl">
            <p>
              Soy Juan Penela. Llevo años acompañando a personas en sus procesos de
              transformación física, trabajando de forma directa, sin atajos y sin
              programas estandarizados.
            </p>
            <p>
              Cada plan que entrego está diseñado desde cero a partir de tus hábitos,
              tus gustos, tu horario y tu disponibilidad. No hay dos clientes con el
              mismo plan, porque no hay dos personas iguales.
            </p>
            <p>
              El seguimiento es continuo y la comunicación es humana. Sin chatbots, sin
              respuestas genéricas — me escribes y te respondo yo, directamente.
            </p>
          </div>

          <div className="mt-12 grid grid-cols-2 gap-px bg-white/10 border border-white/10 max-w-md">
            {['Nutrición', 'Entrenamiento', 'Suplementación', 'Seguimiento'].map(tag => (
              <div key={tag} className="bg-black px-5 py-4 text-white/70 text-[13px] tracking-wide">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
