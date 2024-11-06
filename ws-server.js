const WebSocket = require('ws')

const port = 3000
const webSocketServer = new WebSocket.Server({ port })

webSocketServer.on('connection', (socket, req) => {
  console.log('Server. Event "connection"')

  socket.on('message', (data) => {
    const decodedData = data.toString()

    console.log('Server. Event "message"', decodedData)

    socket.send('some-string-from-server')
  })

  socket.on('close', (code) => {
    console.log('Server. Event "close"', code)
  })
})

console.log(`Pure ws server. Started on port: ${port}`)
