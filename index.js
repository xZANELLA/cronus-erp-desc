const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081
const hostname = "localhost"
const session = require('express-session')


//Sessão
app.use(session({
  secret: "cronus-erp",
  resave: true,
  saveUninitialized: true
}))

app.get('/', (req, res) => {
  res.send('Pagina Inicial')
})

app.listen(PORT, hostname, () => {
  console.log('Aplicação rodando no ' + hostname + ' na porta ' + PORT)
})