/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx'
  ],
  theme: {
    extend: {
      fontFamily:{
        sans: 'Roboto, sans-serif'
      },

      backgroundImage:{
        app:'url(/background.png)'
      },
  
      colors:{
        violet:{
          900: '#724396'
        },
        green:{
          500:'#21F6AA'
        }
      },
    },

    
  },
  plugins: [],
}
