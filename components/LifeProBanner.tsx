import { getLifeProOffer } from '@/lib/lifepro'

export default async function LifeProBanner() {
  const offer = await getLifeProOffer()

  return (
    <section className="bg-black border-y border-white/5 py-12 md:py-16">
      <div className="max-w-7xl mx-auto px-6 md:px-12">
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group relative block overflow-hidden"
        >
          {/* Fondo con degradado naranja LifePro */}
          <div className="absolute inset-0 bg-gradient-to-r from-[#F37021] via-[#FF8A3D] to-[#F37021]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_rgba(255,255,255,0.15)_0%,_transparent_60%)]" />

          {/* Contenido */}
          <div className="relative grid md:grid-cols-12 gap-5 md:gap-8 items-center p-6 md:p-8">
            {/* Imagen / mini logo */}
            <div className="md:col-span-2">
              {offer.image ? (
                <div className="w-20 h-20 md:w-24 md:h-24 overflow-hidden bg-white/10 backdrop-blur-sm border border-white/20">
                  <img
                    src={offer.image}
                    alt="LifePro"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                </div>
              ) : (
                <div className="w-20 h-20 md:w-24 md:h-24 flex items-center justify-center bg-white/10 backdrop-blur-sm border border-white/20">
                  <span className="text-white font-black text-xl leading-none tracking-tight">
                    LIFE<br />PRO
                  </span>
                </div>
              )}
            </div>

            {/* Texto */}
            <div className="md:col-span-7">
              <div className="flex items-center gap-3 mb-2">
                <span className="text-[10px] tracking-[0.25em] text-white/80 font-semibold uppercase">
                  Patrocinado
                </span>
                <span className="text-[10px] text-white/40">·</span>
                <span className="text-[10px] tracking-[0.25em] text-white/80 font-semibold uppercase">
                  LifePro Nutrition
                </span>
              </div>
              <h3 className="text-white text-lg md:text-2xl font-semibold leading-tight mb-1">
                Mi suplementación de confianza.
              </h3>
              <p className="text-white/90 text-[13px] md:text-sm leading-relaxed font-light max-w-xl">
                Usa mi código <span className="font-bold text-white">JPENELA</span> y consigue descuento en toda la tienda.
              </p>
            </div>

            {/* CTA */}
            <div className="md:col-span-3 flex md:justify-end">
              <div className="inline-flex items-center gap-3 bg-black text-white px-5 py-3 group-hover:bg-white group-hover:text-[#F37021] transition-all duration-300">
                <span className="text-[12px] font-semibold tracking-wide">IR A LA TIENDA</span>
                <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                  <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" />
                </svg>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
