/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#181818',
        secondary: '#3B82F6',
        secondaryText: '#B3B3B3',
        themeBg: '#404040',
      },
    },
  },
  plugins: [],
};
