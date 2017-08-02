const lolex = require('lolex')
const http = require('http')
const port = 8080

// install lolex twice crashes meteor but not plain node
var clock = lolex.install()
clock = lolex.install()
clock.uninstall()

const requestHandler = (request, response) => {
  console.log(request.url)
  console.log(new Date())
  response.end('Hello Node.js Server!')
}

const server = http.createServer(requestHandler)

server.listen(port, (err) => {
  if (err) {
    return console.log('something bad happened', err)
  }

  console.log(`server is listening on ${port}`)
})
