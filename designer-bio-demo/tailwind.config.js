import { fontFamily } from 'tailwindcss/defaultTheme';

export default {
  darkMode: 'class',
  content: [
    './src/**/*.{astro,js,jsx,ts,tsx}',
    './public/**/*.html',
  ],
  theme: {
    extend: {
      fontFamily: {
        'sans': ['Inter', ...fontFamily.sans],
      },
      colors: {
        primary: '#7C3AED',
        secondary: '#27272A',
      },
    },
  },
  plugins: [],
};
