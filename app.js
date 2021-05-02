const express = require('express')
const app = express()
const mongoose = require('mongoose')
mongoose.connect('mongodb://localhost/todo-list', { useNewUrlParser: true, useUnifiedTopology: true })
const db = mongoose.connection
const port = 3000

// check mongodb
db.on('error', () => {
  console.log('mongodb error!')
})
db.once('open', () => {
  console.log('mongodb connected!')
})

// set route
app.get('/', (req, res) => {
  res.send('This will be a todo list web.')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})