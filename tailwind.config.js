/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#000000',
        secondary: '#dc2626',
        accent: '#8b45c1',
        red: '#dc2626',
        'red-light': '#ef4444',
        'red-dark': '#b91c1c',
        purple: '#8b45c1',
        'purple-light': '#a855f7',
        'purple-dark': '#6b2c91',
        highlight: '#7c3aed',
        zanpakuto: '#9333ea',
      },
      backgroundImage: {
        'aizen-gradient': 'linear-gradient(135deg, #000000 0%, #8b45c1 50%, #dc2626 100%)',
        'reiatsu-gradient': 'linear-gradient(45deg, #dc2626, #8b45c1)',
      },
      fontFamily: {
        'sans': ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
        'serif': ['Playfair Display', 'Georgia', 'serif'],
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
