/** @type {import('tailwindcss').Config} */


const alto = {
  '50': '#fff1f2',
  '100': '#FFFAE5',
  '200': '#FFFAE5',
  '300': '#fda4af',
  '400': '#fb7185',
  '500': '#f43f5e',
  '600': '#e11d48',
  '700': '#be123c',
  '800': '#9f1239',
  '900': '#881337',
  '950': '#250902',

  'creme': '#FFFAE5',
  'azure': '#CCDBDC',
  'brown': '#250902',
}


module.exports = {
  darkMode: 'class',
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    colors: {
      current: 'currentColor',
      transparent: 'transparent',
      white: '#ffffff',
      primary: alto,
    },
    fontFamily: {
      //decorativ: ['Benzin'],
      benz: ['Benzin'],
      sans: ['Benzin', 'sans-serif'], // Capital B
    },
    fontSize: {
      xs: ['0.75rem', '1rem'],
      sm: ['0.875rem', '1.25rem'],
      base: ['1rem', '1.75rem'],
      lg: ['1.125rem', '2rem'],
      xl: ['1.25rem', '2.125rem'],
      '2xl': ['1.5rem', '2rem'],
      '3xl': ['1.875rem', '2.375rem'],
      '4xl': ['2.25rem', '2.75rem'],
      '5xl': ['3rem', '3.5rem'],
      '6xl': ['3.75rem', '4.25rem'],
    },
  },
};
