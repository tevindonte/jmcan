/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        'Aeonik' : 'Aeonik',
        'Strange' : 'Strange',
        'Sans' : 'Sans',
        'Bulevar' : 'Bulevar',
        'Strangebold' : 'Strangebold',
        'Cigra' : 'Cigra',
        'Fat' : 'Fat',
        'Sharp' : 'Sharp',
      },
      colors : {
        blackish : '#080606',
        pale : '#FFFFFF',
        orangish : '#F7B32B',
        redish : '#C94047',
        black : '#000000',
        white : '#FFFFFF',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
],
}
