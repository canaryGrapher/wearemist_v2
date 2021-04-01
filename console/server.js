const express = require('express')
const app = express()
const port = process.env.PORT || 5050;

app.use(express.static(__dirname + '/public'))

app.get('/', (req, res) => {
  res.sendFile(__dirname + "/public/geek.html")
})

app.get('*', (req, res) => {
  res.sendFile(__dirname + "/public/errorPage.html")
})

app.listen(port, () => {
  console.log(`Server listening on PORT ${port}`)
})