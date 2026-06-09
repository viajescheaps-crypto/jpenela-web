const pillars = [
  {
    quote: 'Tu cuerpo no cambiará hasta que aprendas a construir una mente fuerte.',
    pillar: 'Mentalidad',
  },
  {
    quote: 'Nadie compra un buen físico. Lo conquistas con amor propio, dedicación y disciplina.',
    pillar: 'Disciplina',
  },
  {
    quote: 'El peso impresiona unos segundos. La técnica construye resultados durante años.',
    pillar: 'Constancia',
  },
]

export default function Philosophy() {
  return (
    <section className="bg-black py-28 md:py-40 relative overflow-hidden">
      {/* Sutil textura de fondo */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_rgba(255,255,255,0.03)_0%,_transparent_70%)]" />

      <div className="relative max-w-7xl mx-auto px-6 md:px-12">
        <div className="grid md:grid-cols-12 gap-8 mb-20">
          <div className="md:col-span-5">
            <p className="eyebrow mb-6">Filosofía 🔪</p>
            <h2 className="font-display text-4xl md:text-6xl text-white">
              Lo que entreno<br />
              antes que el cuerpo:<br />
              <span className="text-white/40">la cabeza.</span>
            </h2>
          </div>
          <div className="md:col-span-6 md:col-start-7 flex items-end">
            <p className="text-white/55 text-[15px] md:text-base leading-relaxed font-light">
              No vendo dietas mágicas ni rutinas milagrosas. Trabajo con personas
              que entienden que el cambio físico empieza por la cabeza y se
              sostiene con disciplina diaria.
            </p>
          </div>
        </div>

        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {pillars.map((p, i) => (
            <div key={i} className="group">
              <div className="flex items-center gap-3 mb-6">
                <span className="font-mono text-xs text-white/30 tracking-wider">
                  {String(i + 1).padStart(2, '0')}
                </span>
                <span className="h-px w-12 bg-white/15 group-hover:bg-white/40 transition-colors duration-500" />
                <span className="text-[11px] tracking-[0.25em] text-white/40 uppercase font-medium">
                  {p.pillar}
                </span>
              </div>
              <blockquote className="text-white/85 text-xl md:text-2xl font-light leading-snug group-hover:text-white transition-colors duration-500">
                <span className="text-white/30 text-3xl mr-1 align-top">"</span>
                {p.quote}
                <span className="text-white/30 text-3xl ml-0.5 align-top">"</span>
              </blockquote>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
