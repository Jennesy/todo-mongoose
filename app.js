const express = require('express')
const app = express()

const port = 3000

// set route
app.get('/', (req, res) => {
  res.send('This will be a todo list web.')
})

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`)
})