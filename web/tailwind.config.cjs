/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    /** Todos os arquivos da pasta src */
    './src/**/*.tsx',
    'index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        galaxy: "url('public/background-galaxy.png')",
        'nlw-gradient': "linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 67.94%)",
        'game-gradient': "linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)",
      }
    },
  },
  plugins: [],
}
