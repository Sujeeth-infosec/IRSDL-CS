/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#2563eb',
        accent: '#3b82f6',
        ink: '#F5F6FF',
        mist: '#f8fafc',
        midnight: '#0f172a',
        panel: '#ffffff',
        neon: '#3b82f6',
        background: '#ffffff',
        foreground: '#0f172a',
        border: '#e2e8f0',
        input: '#e2e8f0',
        ring: '#2563eb',
        'primary-foreground': '#ffffff',
        'secondary': '#f1f5f9',
        'secondary-foreground': '#0f172a',
        'accent-foreground': '#0f172a',
        'destructive': '#ef4444',
        'destructive-foreground': '#ffffff',
      },
      fontFamily: {
        sans: ['"Inter"', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        panel: '0 20px 60px rgba(0, 0, 0, 0.08)',
      },
      backgroundImage: {
        grid: 'radial-gradient(circle at center, rgba(59, 130, 246, 0.05) 1px, transparent 1px)',
      },
    },
  },
  plugins: [],
}
