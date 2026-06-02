/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // ── Paleta Bootstrap oficial (según especificación) ──────────────
        bs: {
          primary:   '#0d6efd', // Azul Bootstrap principal
          secondary: '#6c757d',
          success:   '#198754',
          info:      '#0dcaf0',
          warning:   '#ffc107',
          danger:    '#dc3545',
          light:     '#f8f9fa',
          dark:      '#212529',
        },
        // ── Paleta de marca FOCI ─────────────────────────────────────────
        brand: {
          navy:    '#1a2f5e', // Azul marino del logo
          blue:    '#0d6efd', // Bootstrap primary — CTAs y acentos
          mid:     '#6aaed6', // Azul medio del logo (burbuja)
          sky:     '#0dcaf0', // Bootstrap info — detalles
          light:   '#eff6ff', // Azul ultra tenue — fondos alternos
          slate:   '#f8f9fa', // Bootstrap light — fondos
        },
        text: {
          dark:  '#212529', // Bootstrap dark
          body:  '#495057', // Gris legible
          muted: '#6c757d', // Bootstrap secondary
        },
      },
      fontFamily: {
        heading: ['Montserrat', 'sans-serif'],
        body:    ['Inter', 'sans-serif'],
      },
      fontWeight: {
        '300': '300',
        '400': '400',
        '500': '500',
        '600': '600',
        '700': '700',
        '800': '800',
        '900': '900',
      },
      boxShadow: {
        'card':    '0 4px 24px -4px rgba(13, 110, 253, 0.08)',
        'card-lg': '0 8px 40px -8px rgba(13, 110, 253, 0.14)',
        'cta':     '0 8px 32px -4px rgba(13, 110, 253, 0.40)',
      },
      backgroundImage: {
        'gradient-brand': 'linear-gradient(135deg, #1a2f5e 0%, #0d6efd 100%)',
        'gradient-hero':  'linear-gradient(160deg, rgba(26,47,94,0.88) 0%, rgba(13,110,253,0.45) 100%)',
      },
      animation: {
        'fade-up':    'fadeUp 0.6s ease-out forwards',
        'fade-in':    'fadeIn 0.5s ease-out forwards',
        'slide-right':'slideRight 0.7s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          '0%':   { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          '0%':   { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideRight: {
          '0%':   { opacity: '0', transform: 'translateX(-32px)' },
          '100%': { opacity: '1', transform: 'translateX(0)' },
        },
      },
    },
  },
  plugins: [],
}
