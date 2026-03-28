import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          blue: '#1e40af',
          red: '#dc2626',
          gold: '#f59e0b',
        },
        dark: {
          navy: '#0f172a',
        },
        slate: {
          gray: '#475569',
        },
        light: {
          gray: '#f8fafc',
        },
      },
      fontFamily: {
        heading: ['Inter', 'Segoe UI', 'sans-serif'],
        body: ['Inter', 'Segoe UI', 'sans-serif'],
        vietnamese: ['Be Vietnam Pro', 'sans-serif'],
      },
      fontSize: {
        hero: 'clamp(2.5rem, 5vw, 4.5rem)',
        h1: 'clamp(2rem, 4vw, 3.5rem)',
        h2: 'clamp(1.75rem, 3vw, 2.5rem)',
        h3: 'clamp(1.25rem, 2vw, 1.75rem)',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #1e40af 0%, #3b82f6 100%)',
        'gradient-dark': 'linear-gradient(180deg, #0f172a 0%, #1e293b 100%)',
      },
    },
  },
  plugins: [],
}
export default config
