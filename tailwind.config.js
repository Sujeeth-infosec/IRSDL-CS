/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7B5BFF',
        accent: '#F45BFF',
        ink: '#F5F6FF',
        mist: '#151936',
        midnight: '#05031A',
        panel: '#0E1230',
        neon: '#4BC9FF',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(15, 61, 145, 0.15)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(15,61,145,0.15) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
