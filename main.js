const { Server } = require('socket.io')


const port = 3000
const options = {
  cors: {
    origin: '*',
  }
}
const io = new Server(options)

io.on('connection', (socket) => {
  console.log('Server. Event "connection"')

  socket.on('disconnect', (reason) => {
    console.log('Server. Socket. Event "disconnect"', reason)
  });

  socket.on('disconnecting', (reason) => {
    console.log('Server. Socket. Event "disconnecting"', reason)
  });

  socket.on('message-from-client', (data) => {
    console.log('Server. Socket. Event "message-from-client"', data)

    socket.emit('message-from-server', 'some-string-from-server')
  });
})

io.listen(port)

console.log(`SocketIO Server. Started on port: ${port}`)
