const express = require('express');
const path = require('path')

const bodyParser = require('body-parser')

const rootDir = require('./util/path')
const adminData = require('./routes/admin')
const shopRoutes = require('./routes/shop')

const app = express();
app.set('view engine', 'pug')
app.set('views', 'views') //folder to find our templates

app.use(bodyParser.urlencoded({extended: false}))

//built-in middleware to serve read-access only static files
app.use(express.static(path.join(__dirname, 'public')))

app.use('/admin', adminData.routes) //all routes to `adminRoutes` are prefaced with '/admin'
app.use(shopRoutes)

app.use((req, res, next) => { //catch all middleware for 404 page
    // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
    res.status(404).render('404', {pageTitle: 'Page Not Found'})
})
app.listen(3000)
