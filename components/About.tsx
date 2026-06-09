export default function About() {
  return (
    <section id="sobre-mi" className="relative bg-[#0A0908] py-28 md:py-40 overflow-hidden">
      {/* Glow dorado sutil a la izquierda */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_40%_60%_at_15%_50%,_rgba(201,168,116,0.06)_0%,_transparent_70%)] pointer-events-none" />
      <div className="relative max-w-7xl mx-auto px-6 md:px-12 grid md:grid-cols-12 gap-12 md:gap-16 items-center">
        {/* Foto */}
        <div className="md:col-span-5 relative">
          <div className="aspect-[4/5] overflow-hidden bg-[#111]">
            <img
              src="/images/juan-hero.png"
              alt="Juan Penela"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-1000"
            />
          </div>
          <div className="absolute -bottom-5 -right-5 bg-black p-3 border border-white/10 overflow-hidden">
            <video
              src="/video/logo-anim.mp4"
              autoPlay
              loop
              muted
              playsInline
              className="w-16 h-16 object-cover"
            />
          </div>
        </div>

        {/* Texto */}
        <div className="md:col-span-7 md:pl-8">
          <p className="eyebrow mb-6">Sobre mí</p>

          <h2 className="font-display text-4xl md:text-6xl text-white mb-10">
            Un método pensado<br />
            <span className="text-brand-accent">para personas reales.</span>
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

          <div className="mt-12 grid grid-cols-2 gap-px bg-brand-accent/15 border border-brand-accent/15 max-w-md">
            {['Nutrición', 'Entrenamiento', 'Suplementación', 'Seguimiento'].map(tag => (
              <div key={tag} className="bg-[#0A0908] px-5 py-4 text-white/70 text-[13px] tracking-wide hover:text-brand-accent transition-colors">
                {tag}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
