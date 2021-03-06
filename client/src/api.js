import openSocket from 'socket.io-client'

const socket = openSocket('http://localhost:8000')

function createChannel(name) {
  socket.emit('createChannel', { name })
}

function subscribeToChannels(cb) {
  socket.on('channel', channel => cb(channel))
  socket.emit('subscribeToChannels')
}

function publishMessage(channelId, name, message) {
  socket.emit('publishMessage', channelId, name, message)
}

function subscribeToMessage(channelId, cb) {
  socket.on(`channelMessage: ${channelId}`, message => cb(message))
  socket.emit('subscribeToMessage', channelId)
}

function unsubscribe(){
  socket.close()
  socket.open()
}

function trueUnsubscribe(){
  socket.close()
}

export {
  createChannel,
  subscribeToChannels,
  publishMessage,
  subscribeToMessage,
  unsubscribe,
  trueUnsubscribe
}
