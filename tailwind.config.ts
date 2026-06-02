import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        sora: ['var(--font-sora)', 'sans-serif'],
        dm: ['var(--font-dm)', 'sans-serif'],
      },
      colors: {
        navy: '#1B2A6B',
        navy2: '#111d4a',
        navy3: '#253690',
        orange: '#E8401C',
        orange2: '#c73515',
        off: '#F6F8FD',
        light: '#EEF1F9',
        border: '#dde3f0',
        muted: '#64748b',
        green: '#059669',
      },
    },
  },
  plugins: [],
}

export default config
