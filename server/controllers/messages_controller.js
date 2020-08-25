const messages = []
let newId = 0

module.exports = {
  createMessage: (req, res) => {
    const { text, time } = req.body
    messages.push({ id: newId, text, time })
    newId++
    res.status(200).send(messages)
  },


  readMessage: (req, res) => {
    return res.status(200).send(messages)
  },


  updateMessage: (req, res) => {
    const { id } = req.params
    const { text } = req.body

    const index = messages.findIndex(element => element.id === +id)
    if (index === -1) {
      return res.status(404).send("Message not found")
    }
    console.log(messages[index], index)
    const existingMessage = messages[index]

    const modifiedMessage = {
      id: existingMessage.id,
      text: text || existingMessage.text,
      time: existingMessage.time
    }

    messages[index] = modifiedMessage

    res.status(200).send(messages)
  },


  deleteMessage: (req, res) => {
    const { id } = req.params

    const index = messages.findIndex(element => element.id === +id)

    if (!id) {
      return res.status(404).send("Message not found")
    }

    messages.splice(index, 1)

    res.status(200).send(messages)
  }

}