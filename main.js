const { Server } = require('socket.io')


const io = new Server()
const port = 3000

io.on('connection', (socket) => {
  console.log('Connection')
})

io.listen(port)

console.log(`Server. Started on port: ${port}`)
