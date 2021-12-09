const express = require('express')
const { engine } = require('express-handlebars')
const path = require('path')
const router = require('./routes')

const app = express()

/** habilitar handlebars como view */
app.engine('handlebars', engine())
app.set('view engine', 'handlebars')
app.set('views', './views')

// static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/', router())

app.listen(5000)
