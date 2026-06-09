import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          black: '#000000',
          white: '#FFFFFF',
          surface: '#111111',
          muted: 'rgba(255,255,255,0.55)',
          border: 'rgba(255,255,255,0.12)',
        },
      },
      fontFamily: {
        heading: ['var(--font-bebas)', 'Barlow Condensed', 'sans-serif'],
        body: ['var(--font-inter)', 'Inter', 'sans-serif'],
      },
      letterSpacing: {
        widest2: '0.2em',
      },
    },
  },
  plugins: [],
}

export default config
