module.exports = {
    //entry: './src/index.js', 
      presets: [
        require('poi-preset-svelte')({loaderOptions: {emitCss: true}})
      ]
    }