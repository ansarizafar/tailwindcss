const tailwindcss = require('tailwindcss')
const atImport = require("postcss-import")

module.exports = {
  plugins: [
    atImport(),
    tailwindcss('./tailwind.js'),
    require('autoprefixer')
    
        
  ]
}