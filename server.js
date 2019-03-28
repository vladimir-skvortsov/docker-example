const { createServer } = require('http')
const emojis = require('emojis-list')
const { random } = require('lodash')


const server = createServer((request, response) => {
  response.setHeader('Content-Type', 'text/plain; charset=utf-8')
  response.end(emojis[random(0, emojis.length - 1)])
})


server.listen(3000, () => {
  console.log('Server is listening on http://localhost:3000')
})