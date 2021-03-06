const express = require('express')
const messageCtrl = require('./controllers/messages_controller')

const app = express()
const SERVER_PORT = 3001
app.use(express.json())
app.use(express.static(__dirname + '/../public/build'))

app.post('/api/messages', messageCtrl.createMessage)
app.get('/api/messages', messageCtrl.readMessage)
app.put('/api/messages/:id', messageCtrl.updateMessage)
app.delete('/api/messages/:id', messageCtrl.deleteMessage)

app.listen(SERVER_PORT, () => console.log(`listening on port ${SERVER_PORT}`))