const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081
const hostname = "localhost"


app.get('/', (req, res) => {
  res.send('Pagina Inicial')
})

app.listen(PORT, hostname,  () => {
  console.log('Aplicação rodando no ' + hostname + ' na porta ' + PORT)
})