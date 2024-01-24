import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'sage-green': '#D0D9B3',
        'button-color': 'rgba(100, 132, 88, 1)',
        'input': 'rgba(234, 250, 230, 1)',
        'input-border': 'rgba(20, 102, 72, 1)',
        'nav': 'rgba(185, 206, 177, 1)',
      }
    },
  },
  plugins: [],
}
export default config
