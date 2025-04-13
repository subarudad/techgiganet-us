/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '1': '0.25rem',
        '2': '0.5rem',
        '3': '0.75rem',
        '4': '1rem',
        '6': '1.5rem',
        '8': '2rem',
        '12': '3rem',
      },
      animation: {
        'gradient-x': 'gradient-x 15s ease infinite',
        'float': 'float 6s ease-in-out infinite',
        'typing': 'typing 3.5s steps(40, end)',
      },
      keyframes: {
        'gradient-x': {
          '0%, 100%': { backgroundPosition: 'left center' },
          '50%': { backgroundPosition: 'right center' },
        },
        'float': {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        'typing': {
          'from': { width: '0' },
          'to': { width: '100%' },
        },
      },
    },
  },
  plugins: [],
} 