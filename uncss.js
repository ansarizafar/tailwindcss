const uncss = require('uncss');
const fs = require('fs');
const CleanCSS = require('clean-css');


const files = ['http://localhost:3000/']

uncss(files, {}, function (error, output) {
    
    output = new CleanCSS().minify(output);

    
    console.log(output);

    fs.writeFile('prodstyles.css', output.styles, (err) => {  
        // throws an error, you could also catch it here
        if (err) throw err;
    
        // success case, the file was saved
        console.log('Css saved!');
    });




});