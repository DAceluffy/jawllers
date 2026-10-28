/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Emerald Luxury Palette (Inspired by Lumière Fine Jewelry)
        emerald: {
          950: '#071711',
          900: '#0F2E24', // Deep Forest
          850: '#113328',
          800: '#13382C', // Primary Signature Emerald
          700: '#194738',
          600: '#235D4B',
          500: '#327D67',
          100: '#E4EFE9',
          50: '#F1F7F4',
        },
        // Warm Ivory & Pearl White Palette
        ivory: {
          50: '#FDFCF9',
          100: '#FAF7F2', // Primary Page Background
          200: '#F4EFE6', // Secondary Card / Section Background
          300: '#EADFC9', // Subtle Borders
          400: '#D8CEBA', // Defined Borders
          500: '#BFB29A',
        },
        // Warm Champagne Gold Accents
        gold: {
          champagne: '#C8A762', // Signature Warm Gold
          light: '#E2C78A',
          deep: '#A88438',
          soft: '#F6EED8',
          accent: '#C8A762',
        },
        // Charcoal & Muted Forest Greys for Text
        charcoal: {
          DEFAULT: '#14221B', // Dark Headings
          dark: '#0C1712',
          muted: '#5A6860',   // Body text
          light: '#86948C',   // Captions
        }
      },
      fontFamily: {
        heading: ['"Cormorant Garamond"', '"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        playfair: ['"Playfair Display"', 'serif'],
        sans: ['"Poppins"', 'sans-serif'],
        hindi: ['"Noto Serif Devanagari"', 'serif'],
      },
      boxShadow: {
        'warm': '0 8px 30px 0 rgba(20, 34, 27, 0.06)',
        'warm-hover': '0 16px 40px 0 rgba(19, 56, 44, 0.12)',
        'gold-glow': '0 0 25px rgba(200, 167, 98, 0.25)',
        'emerald-glow': '0 0 25px rgba(19, 56, 44, 0.3)',
      },
      animation: {
        'shimmer': 'shimmer 2.5s infinite linear',
        'float': 'float 4s ease-in-out infinite',
        'pulse-slow': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      keyframes: {
        shimmer: {
          '0%': { backgroundPosition: '-200% 0' },
          '100%': { backgroundPosition: '200% 0' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-6px)' },
        }
      }
    },
  },
  plugins: [],
}
