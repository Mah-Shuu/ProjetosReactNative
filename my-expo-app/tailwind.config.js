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
        'cinza-100': '#F4F5F7',
        'cinza-200': '#D6D7DB',
        'cinza-500': '#A5ADBA',
        'cinza-azul-800': '#427486',
        'cinza-azul-900': '#07394B',

      },
      fontFamily: {
        roboto: ['Roboto-Regular'], 
      },
    },
  },
  plugins: [],
};
