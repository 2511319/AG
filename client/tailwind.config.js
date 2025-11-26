/** @type {import('tailwindcss').Config} */
const defaultTheme = require('tailwindcss/defaultTheme')

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        fantasy: {
          obsidian: '#0a0a0f', // Almost black, void-like
          950: '#130f1a', // Very dark purple/black
          900: '#1f162b', // Deep background
          800: '#2d213f', // Panel background
          700: '#453263', // Border/Accent
          600: '#6d4c9e', // Primary muted
          500: '#9d70ff', // Highlight
          400: '#b794ff',
          300: '#d1b8ff',
          200: '#e0d4fc', // Text
          100: '#f3eaff',
          50: '#faf5ff',
          gold: {
            DEFAULT: '#ffd700',
            dim: '#b8860b', // Dark Goldenrod
            metallic: '#d4af37', // Metallic Gold
            glow: '#fffacd', // Lemon Chiffon
          },
          crimson: {
            DEFAULT: '#8a1c1c',
            blood: '#660000',
            bright: '#ff4d4d',
          },
          mana: {
            DEFAULT: '#00bcd4',
            glow: '#00e5ff',
            dim: '#006064',
          },
          life: {
            DEFAULT: '#e53935',
            glow: '#ff5252',
            dim: '#b71c1c',
          },
          stone: {
            dark: '#1c1c1c',
            light: '#2e2e2e',
          }
        }
      },
      fontFamily: {
        sans: ["var(--font-body)", ...defaultTheme.fontFamily.sans],
        serif: ["var(--font-body)", ...defaultTheme.fontFamily.serif],
        display: ["var(--font-display)", ...defaultTheme.fontFamily.serif],
      },
      backgroundImage: {
        'stone-texture': "url('https://www.transparenttextures.com/patterns/dark-matter.png')",
        'parchment': "linear-gradient(to bottom right, #fdfbf7, #f3e5d0)",
        'gold-gradient': "linear-gradient(135deg, #bf953f, #fcf6ba, #b38728, #fbf5b7, #aa771c)",
        'citadel-stone': "url('/assets/citadel/texture_stone_wall.png')",
        'citadel-gold': "url('/assets/citadel/texture_gold_trim.png')",
        'citadel-parchment': "url('/assets/citadel/texture_parchment.png')",
        'citadel-obsidian': "url('/assets/citadel/texture_obsidian.png')",
      },
      boxShadow: {
        'heavy': '0 10px 30px -10px rgba(0, 0, 0, 0.8)',
        'inner-glow': 'inset 0 0 20px rgba(157, 112, 255, 0.2)',
        'gold-glow': '0 0 15px rgba(255, 215, 0, 0.3)',
        'citadel-panel': '0 0 20px rgba(0,0,0,0.8), inset 0 0 10px rgba(0,0,0,0.5)',
        'citadel-inset': 'inset 0 4px 8px rgba(0,0,0,0.6)',
      },
      dropShadow: {
        'citadel-text': '2px 2px 0 rgba(0,0,0,0.8)',
        'citadel-glow': '0 0 5px rgba(255, 215, 0, 0.5)',
      }
    },
  },
  plugins: [],
}
