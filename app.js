const express = require('express')
const path = require('path')

const bodyParser = require('body-parser')

const pageNotFoundControllers = require('./controllers/404')

const adminRoutes = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express()
app.set('view engine', 'ejs')
app.set('views', 'views') //folder to find our templates

app.use(bodyParser.urlencoded({ extended: false }))

//built-in middleware to serve read-access only static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminRoutes) //all routes to `adminRoutes` are prefaced with '/admin'
app.use(shopRoutes)

app.use(pageNotFoundControllers.get404)
app.listen(3000)
