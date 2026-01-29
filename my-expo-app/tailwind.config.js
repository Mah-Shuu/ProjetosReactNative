/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./App.{js,ts,tsx}', './components/**/*.{js,ts,tsx}'],

  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        'azul-500': '#3490dc',
        'azul-600': '#0878A1',
        'ciano-500': '#7DE0F2',
        'vermelho-500': '#DE350B',
        'amarelo-500': '#FFAB00',
        'verde-500': '#36B37E',
        'secondary': '#ffed4a',
        'accent': '#e3342f',
      },
      fontFamily: {
        roboto: ['Roboto-Regular'], 
      },
    },
  },
  plugins: [],
};
