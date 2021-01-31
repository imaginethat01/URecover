const express = require('express')
const path = require('path')
const app = express()
const port = 3000


app.use('/src', express.static(path.join(__dirname, '/src')))


app.get("/", function(req, res) {
  res.sendFile(path.join(__dirname, "src/index.html"));
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})
