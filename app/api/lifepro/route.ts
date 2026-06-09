import { NextResponse } from 'next/server'
import { getLifeProOffer } from '@/lib/lifepro'

export const revalidate = 3600

export async function GET() {
  const offer = await getLifeProOffer()
  return NextResponse.json(offer, {
    headers: {
      'Cache-Control': 'public, s-maxage=3600, stale-while-revalidate=86400',
    },
  })
}
