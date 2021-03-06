const express = require('express')
const stylus = require('stylus')
const { join } = require('path')
const app = express()
const port = 1997

app.use(express.json())
app.set('view engine', 'pug')
app.set('views', join(__dirname, 'views'))

app.use(stylus.middleware({
  src: join(__dirname, 'styles'),
  dest: join(__dirname, 'public'),
  debug: true,
  force: true
}))

app.get('/', (req, res) => {
  res.render('index.pug', { environment: 'Development' })
})

app.use('/', express.static(join(__dirname, 'public')))

app.listen(port, () => {
  console.log(`Listening on ${port}`)
})
