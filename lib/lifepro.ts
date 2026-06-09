/**
 * LifePro data fetcher
 *
 * Hace fetch de la home de LifePro Nutrition cada hora (ISR) y extrae los
 * meta tags Open Graph para mostrar la oferta destacada actual en el banner.
 *
 * Si LifePro cambia su web, este fetcher recoge automáticamente
 * el nuevo título, descripción e imagen en la próxima revalidación.
 *
 * Todos los enlaces incluyen el código de descuento JPENELA aplicado
 * y parámetros UTM propios para que Juan pueda distinguir en sus
 * analytics el tráfico que viene de su web del que viene de Instagram.
 */

const SOURCE_URL = 'https://www.lifepronutrition.com/es/'

/**
 * URL de referido con código JPENELA aplicado.
 * UTMs personalizados para atribución desde la web (no Instagram).
 */
const REFERRAL_URL =
  'https://www.lifepronutrition.com/es/' +
  '?codigo=JPENELA' +
  '&utm_source=jpenela_web' +
  '&utm_medium=referral' +
  '&utm_content=banner_home'

export type LifeProOffer = {
  title: string
  description: string
  image: string | null
  url: string
}

const FALLBACK: LifeProOffer = {
  title: 'LifePro Nutrition — Suplementación deportiva',
  description:
    'La marca que uso. Calidad real, sin humo. Usa mi código JPENELA y consigue descuento en toda la web.',
  image: null,
  url: REFERRAL_URL,
}

/**
 * Extrae el valor de una meta tag Open Graph del HTML.
 */
function extractOG(html: string, property: string): string | null {
  const patterns = [
    new RegExp(`<meta[^>]+property=["']og:${property}["'][^>]+content=["']([^"']+)["']`, 'i'),
    new RegExp(`<meta[^>]+content=["']([^"']+)["'][^>]+property=["']og:${property}["']`, 'i'),
    new RegExp(`<meta[^>]+name=["']${property}["'][^>]+content=["']([^"']+)["']`, 'i'),
  ]
  for (const re of patterns) {
    const m = html.match(re)
    if (m && m[1]) return m[1]
  }
  return null
}

/**
 * Obtiene la oferta actual de LifePro.
 * Revalidado cada hora por Next.js (next.revalidate: 3600).
 */
export async function getLifeProOffer(): Promise<LifeProOffer> {
  try {
    const res = await fetch(SOURCE_URL, {
      next: { revalidate: 3600 },
      headers: {
        'User-Agent':
          'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36',
        'Accept': 'text/html,application/xhtml+xml',
        'Accept-Language': 'es-ES,es;q=0.9',
      },
    })

    if (!res.ok) return FALLBACK

    const html = await res.text()

    const title = extractOG(html, 'title') || FALLBACK.title
    const description = extractOG(html, 'description') || FALLBACK.description
    const image = extractOG(html, 'image')

    return {
      title: title.length > 80 ? title.slice(0, 77) + '…' : title,
      description: description.length > 160 ? description.slice(0, 157) + '…' : description,
      image,
      url: REFERRAL_URL,
    }
  } catch {
    return FALLBACK
  }
}
