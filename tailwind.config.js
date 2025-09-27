/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        // Primary Colors (base of the theme)
        primary: '#0D0D0D', // Black Soul - backgrounds, strong contrast
        secondary: '#2E2E2E', // Spirit Gray - secondary background
        white: '#FFFFFF', // Pure White - main text, highlights
        
        // Accent Colors (energy, emphasis)
        accent: '#F77F00', // Shinigami Orange - Ichigo's theme, buttons/CTAs
        danger: '#B22222', // Blood Red - danger, warnings, highlights
        highlight: '#3A86FF', // Soul Blue - calm, links, UI accents
        
        // Secondary Shades (soft balance)
        neutral: '#E5C29F', // Hueco Sand - neutral backgrounds, cards
        info: '#A3C4F3', // Ice Hollow Blue - secondary accents, info boxes
        muted: '#C0C0C0', // Steel Silver - borders, muted icons
        
        // Optional Glow / Spiritual Effects
        reiatsu: '#7B2CBF', // Reiatsu Purple - special effects, hover glow
        zanpakuto: '#06D6A0', // Zanpakutō Teal - success, status highlights
      },
      fontFamily: {
        'mono': ['JetBrains Mono', 'Monaco', 'Consolas', 'monospace'],
      },
    },
  },
  plugins: [],
}
