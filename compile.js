const { join } = require('path')
const pug = require('pug')
const fs = require('fs')

const viewsDirectory = join(__dirname, 'views')
const publicDirectory = join(__dirname, 'public')

fs.readdir(viewsDirectory, (err, files) => {
  files.forEach(file => {
    var array = file.split('.')
    if (array.length !== 2) return
    if (array[1] !== 'pug') return
    var name = array[0]
    const compiledFunction = pug.compileFile(`views/${name}.pug`)
    const compiledHTML = compiledFunction({ environment: 'Production' })
    fs.writeFileSync(join(publicDirectory, `${name}.html`), compiledHTML)
  });
});
