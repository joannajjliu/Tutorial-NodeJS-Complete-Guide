const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express()
const router = express.Router()

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, 'public')))

app.get('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'main.html'))
})

app.get('/users', (req, res, next) => {
    res.sendFile(path.join(__dirname, 'views', 'users.html'))
})

app.use((req, res, next) => {
    res.status(404).send(`<h1>Hello I am missing</h1>`)
})

app.listen(3002)