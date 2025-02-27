/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html'],
  theme: {
    extend: {
      colors : {
        'primary' : '#3238f2',
        'wand' : '#ffcecc',
        'infinity' : '#fff6cc'
        
      },
      fontFamily : {
        'display' : ['poppins' , 'sans-serif'],
        'body' : ['Inter', 'sans-serif']
      }
    },
  },
  plugins: [],
}

