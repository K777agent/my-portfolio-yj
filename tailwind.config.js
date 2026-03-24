/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontSize: {
        'xs': ['clamp(0.7rem, 1vw, 0.75rem)', { lineHeight: '1.5' }],
        'sm': ['clamp(0.8rem, 1.5vw, 0.875rem)', { lineHeight: '1.5' }],
        'base': ['clamp(0.9rem, 1.8vw, 1rem)', { lineHeight: '1.5' }],
        'lg': ['clamp(1rem, 2vw, 1.125rem)', { lineHeight: '1.5' }],
        'xl': ['clamp(1.1rem, 2.5vw, 1.25rem)', { lineHeight: '1.4' }],
        '2xl': ['clamp(1.25rem, 3vw, 1.5rem)', { lineHeight: '1.33' }],
        '3xl': ['clamp(1.5rem, 4vw, 1.875rem)', { lineHeight: '1.2' }],
        '4xl': ['clamp(1.75rem, 5vw, 2.25rem)', { lineHeight: '1.1' }],
        '5xl': ['clamp(2rem, 6vw, 3rem)', { lineHeight: '1.1' }],
        '6xl': ['clamp(2.5rem, 8vw, 3.75rem)', { lineHeight: '1' }],
        '7xl': ['clamp(3rem, 10vw, 4.5rem)', { lineHeight: '1' }],
      },
      colors: {
        dark: {
          900: '#0f172a',
          800: '#1e293b',
          700: '#334155',
        },
        primary: {
          500: '#3b82f6',
          400: '#60a5fa',
        },
        accent: {
          500: '#8b5cf6',
          400: '#a78bfa',
        }
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
      },
      animation: {
        'blob': 'blob 7s infinite',
        'fade-in': 'fadeIn 1s ease-out forwards',
        'slide-up': 'slideUp 0.8s ease-out forwards',
      },
      keyframes: {
        blob: {
          '0%': { transform: 'translate(0px, 0px) scale(1)' },
          '33%': { transform: 'translate(30px, -50px) scale(1.1)' },
          '66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
          '100%': { transform: 'translate(0px, 0px) scale(1)' },
        },
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        }
      }
    },
  },
  plugins: [],
}
