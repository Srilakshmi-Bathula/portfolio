/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        ink: '#0A0E14',
        surface: '#10141D',
        surface2: '#161B26',
        amber: '#FFB454',
        cyan: '#5CCFE6',
        mutedtxt: '#8A8F98',
        line: '#1F2530',
      },
      fontFamily: {
        display: ['"Space Grotesk"', 'sans-serif'],
        body: ['"Inter"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      backgroundImage: {
        'grid-fade': 'radial-gradient(ellipse 80% 50% at 50% -10%, rgba(255,180,84,0.12), transparent)',
      },
    },
  },
  plugins: [],
}
