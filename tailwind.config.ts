import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          navy: '#202C58',
          blue: '#202C58', // Legacy support
          gold: '#FFBC00',
          red: '#F00000',
          amber: '#F0B849',
          'light-amber': '#E8BF96',
        },
        dark: {
          navy: '#202C58',
          charcoal: '#1C1D20',
        },
        slate: {
          gray: '#555555',
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
        hero: 'clamp(3rem, 6vw, 8.125rem)', // 130px max like talentscare.de
        h1: 'clamp(2.5rem, 5vw, 7.5rem)', // 120px max
        h2: 'clamp(2rem, 4vw, 6.25rem)', // 100px max
        h3: 'clamp(1.5rem, 3vw, 5rem)', // 80px max
        h4: 'clamp(1.25rem, 2.5vw, 4.375rem)', // 70px max
        h5: 'clamp(1.125rem, 2vw, 3.75rem)', // 60px max
        body: '1rem', // 16px
        'body-lg': '1.125rem', // 18px
        'body-xl': '1.5rem', // 24px
      },
      spacing: {
        '20': '1.25rem',
        '40': '2.5rem',
        '60': '3.75rem',
        '80': '5rem',
        '100': '6.25rem',
        '150': '9.375rem',
      },
      backgroundImage: {
        'gradient-hero': 'linear-gradient(135deg, #202C58 0%, #FFBC00 100%)',
        'gradient-dark': 'linear-gradient(180deg, #1C1D20 0%, #202C58 100%)',
        'gradient-gold': 'linear-gradient(90deg, #FFBC00 0%, #F0B849 100%)',
      },
      boxShadow: {
        'bold': '5px 5px 0px rgba(0, 0, 0, 1)',
        'bold-hover': 'none',
      },
    },
  },
  plugins: [],
}
export default config
