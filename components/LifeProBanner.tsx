import { getLifeProOffer } from '@/lib/lifepro'

export default async function LifeProBanner() {
  const offer = await getLifeProOffer()

  return (
    <section className="bg-black border-y border-white/5">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 md:py-14">
        <a
          href={offer.url}
          target="_blank"
          rel="noopener noreferrer sponsored"
          className="group block"
        >
          <div className="grid md:grid-cols-12 gap-6 md:gap-10 items-center border border-white/10 hover:border-white/30 p-6 md:p-10 transition-all duration-300 hover:bg-[#0a0a0a]">
            {/* Image */}
            {offer.image ? (
              <div className="md:col-span-3 aspect-square overflow-hidden bg-[#0a0a0a]">
                <img
                  src={offer.image}
                  alt="LifePro"
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                />
              </div>
            ) : (
              <div className="md:col-span-3 aspect-square flex items-center justify-center bg-[#0a0a0a] border border-white/10">
                <span className="font-display text-5xl text-white">LIFE<br />PRO</span>
              </div>
            )}

            {/* Content */}
            <div className="md:col-span-9">
              <div className="flex items-center gap-3 mb-4">
                <span className="text-[10px] tracking-[0.3em] text-white/40 font-medium uppercase">
                  Patrocinado
                </span>
                <span className="h-px w-8 bg-white/20" />
                <span className="text-[10px] tracking-[0.2em] text-white/40 font-medium">
                  LIFEPRO
                </span>
              </div>

              <h3 className="text-white text-xl md:text-2xl font-medium leading-tight mb-3 group-hover:text-white transition-colors">
                {offer.title}
              </h3>
              <p className="text-white/55 text-[14px] md:text-[15px] leading-relaxed font-light mb-6 max-w-2xl">
                {offer.description}
              </p>

              <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
                <div className="inline-flex items-center gap-3 border border-white/30 px-4 py-2">
                  <span className="text-[10px] tracking-[0.2em] text-white/40">CÓDIGO</span>
                  <span className="font-mono text-white font-semibold tracking-wider">JPENELA</span>
                </div>
                <span className="text-[13px] text-white/70 group-hover:text-white transition-colors flex items-center gap-2">
                  Ir a la tienda
                  <svg width="14" height="14" viewBox="0 0 14 14" fill="none" className="group-hover:translate-x-1 transition-transform">
                    <path d="M1 7h12M7 1l6 6-6 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="square" strokeLinejoin="miter" />
                  </svg>
                </span>
              </div>
            </div>
          </div>
        </a>
      </div>
    </section>
  )
}
