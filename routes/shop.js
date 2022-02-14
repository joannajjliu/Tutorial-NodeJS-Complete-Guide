const path = require('path')

const express = require('express')

const rootDir = require('../util/path')
const adminData = require('./admin')

const router = express.Router()

router.use('/', (req, res, next) => {// domain STARTS with /
    console.log("This always runs!")
    console.log("shop.js products", adminData.products)
    next() // Allows the request to continue to the next middleware in line
})

router.get('/', (req, res, next) => {// `get` makes sure it's an exact path match
    console.log("In another middleware!")
    // res.send(`<h1>Hello from express!</h1>`) // res.send ends the middleware chain
    // res.sendFile(path.join(rootDir, 'views', 'shop.html')) // __dirname is the absolute path to this project/routes folder
    res.render('shop', {prods: adminData.products, pageTitle: 'Shop', path: '/'}); //we defined the default template engine, and access folder in app.js
})

module.exports = router