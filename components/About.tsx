export default function About() {
  return (
    <section id="sobre-mi" className="bg-[#111111] py-24 md:py-32">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
        {/* Foto */}
        <div className="relative">
          <div className="aspect-[3/4] overflow-hidden">
            <img
              src="/images/juan-hero.jpg"
              alt="Juan Penela entrenador personal"
              className="w-full h-full object-cover object-top grayscale hover:grayscale-0 transition-all duration-700"
            />
          </div>
          {/* Logo superpuesto */}
          <div className="absolute -bottom-6 -right-6 bg-black p-4">
            <img src="/images/logo.png" alt="JP" className="w-16 h-16 object-contain" />
          </div>
        </div>

        {/* Texto */}
        <div>
          <p className="text-xs tracking-[0.3em] text-white/40 mb-4">SOBRE MÍ</p>
          <h2
            className="text-5xl md:text-7xl leading-none mb-8 uppercase"
            style={{ fontFamily: 'Bebas Neue, Barlow Condensed, sans-serif' }}
          >
            MI MÉTODO<br />DA RESULTADOS
          </h2>
          <div className="space-y-4 text-white/70 leading-relaxed">
            <p>
              Soy Juan Penela, entrenador personal online especializado en transformaciones reales.
              Trabajo contigo de forma directa y personalizada para que alcances tu objetivo,
              sin excusas y sin métodos genéricos.
            </p>
            <p>
              Cada plan que entrego está diseñado desde cero para ti: adaptado a tus gustos,
              tu horario, tus días de entrenamiento y tus objetivos concretos.
              No hay copiar y pegar.
            </p>
            <p>
              El seguimiento lo hacemos vía WhatsApp — de lunes a viernes, 8:00 a 19:00.
              Puedes enviarme vídeos para corrección de técnica, preguntarme cualquier duda
              y recibir actualizaciones del plan según tu progreso real.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap gap-4">
            {['Nutrición personalizada', 'Entrenamiento adaptado', 'Seguimiento real', 'Corrección por vídeo'].map(tag => (
              <span key={tag} className="border border-white/20 text-white/60 text-xs tracking-[0.15em] px-4 py-2">
                {tag}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
