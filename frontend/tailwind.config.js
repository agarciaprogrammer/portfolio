/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'accent-primary': '#00ffff',
        'accent-secondary': '#ff00ff',
        'accent-tertiary': '#ffff00',
        'text-secondary': '#888888',
        'border-color': '#333333',
      },
      animation: {
        'glow': 'glow 2s ease-in-out infinite alternate',
      },
      keyframes: {
        glow: {
          'from': {
            textShadow: '0 0 10px #00ffff'
          },
          'to': {
            textShadow: '0 0 20px #00ffff, 0 0 30px #00ffff'
          }
        }
      }
    },
  },
  plugins: [],
} 