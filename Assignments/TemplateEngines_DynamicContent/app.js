const bodyParser = require('body-parser')
const express = require('express')
const path = require('path')

const app = express()

app.set('view engine', 'pug')
app.set('views', path.join(__dirname, './views'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(express.static(path.join(__dirname, './public')))

const users = []

app.get('/', (req, res, next) => {
    // res.render('main', {pageTitle: 'Main'})
    res.render('main')

})

app.post('/users', (req, res, next) => {
    // res.render('main', {pageTitle: 'Main'})
    users.push(req.body.username)
    res.redirect('/users')

})

app.get('/users', (req, res, next) => {
    res.render('users', {pageTitle: 'Users', users: users})
})

app.use((req, res, next) => {
    res.status(404).send(`<h1>Hello I am missing</h1>`)
})

app.listen(3002)