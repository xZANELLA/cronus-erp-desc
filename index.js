const express = require('express')
const app = express()
const PORT = process.env.PORT || 8081
const hostname = "localhost"
const session = require('express-session')
const flash = require('connect-flash')
const passport = require("passport")
//require('./config/auth')(passport)


//Sessão
app.use(session({
  secret: "cronus-erp",
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())
app.use(flash())

//Middleware
app.use((req, res, next) => {
    res.locals.success_msg = req.flash("success_msg")
    res.locals.error_msg = req.flash("error_msg")
    res.locals.error = req.flash("error")
    res.locals.user = req.user || null
    next()
})

app.get('/', (req, res) => {
  res.send('Pagina Inicial')
})

app.listen(PORT, hostname, () => {
  console.log('Aplicação rodando no ' + hostname + ' na porta ' + PORT)
})