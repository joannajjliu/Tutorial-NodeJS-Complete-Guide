const express = require('express')

const app = express()

app.use('/users', (req, res, next) => {
    res.send(`<h1>My users</h1>`)
})

app.use('/', (req, res, next) => {
    res.send(`<h1>Ending this now</h1>`)
})

app.use((req, res, next) => {
    console.log("First message")
    next()
})

app.use((req, res, next) => {
    console.log("Second message")
    res.send(`<h1>My response!</h1>`)
})

app.listen(3000)