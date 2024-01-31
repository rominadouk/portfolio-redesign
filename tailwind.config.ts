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
        'custom-gradient': 'linear-gradient(84deg, #B9CEB1 0%, #E3ECE0 100%)',
      },
      colors: {
        'sage-green': '#D0D9B3',
        'button-color': 'rgba(100, 132, 88, 1)',
        'input': 'rgba(234, 250, 230, 1)',
        'input-border': 'rgba(20, 102, 72, 1)',
        'nav': 'rgba(185, 206, 177, 1)',
        'stroke': 'rgba(206, 192, 177, 1)',
        'dark-green': '#1F261B',
        'off-white': 'rgba(255, 255, 255, 1)',
        'forest-green': '#146648',
        'green-gradient': 'rgba(185,206,177, 1)',
        'white-gradient': 'rgba(277,236,224, 1)'

      },
      fontFamily: {
        'cabin': ['Cabin', 'sans-serif']
      }
    },
  },
  plugins: [],
}
export default config
