/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    extend: {
      colors:{
        "color-primary":"#01051e",
        "color-primary-light":"#020726",
        "color-primary-dark":"#010417",
        "color-secondry":"#ff7d3b",
        "color-gray":"#333",
        "color-white":"#fff",
        "color-blod":"#a427df"
      }
    },
    container:{
      center:true,
      padding:{
        default:'20px',
        md:'50px'
      }
    }
  },
  plugins: [],
}

