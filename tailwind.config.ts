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
          black: '#0A0908',
          white: '#FAFAF7',
          surface: '#13110F',
          muted: 'rgba(250,250,247,0.55)',
          border: 'rgba(250,250,247,0.12)',
          accent: '#C9A874',
          'accent-soft': '#D4B88A',
          'accent-dark': '#8B7444',
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
