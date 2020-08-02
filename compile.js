const { join } = require('path')
const pug = require('pug')
const fs = require('fs')

const compiledFunction = pug.compileFile('views/index.pug')

const compiledString = compiledFunction({
  environment: 'Production'
})

console.log(compiledString)

fs.writeFileSync(join(__dirname, 'public', 'index.html'), compiledString)
