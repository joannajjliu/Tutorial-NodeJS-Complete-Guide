const path = require('path')

const express = require('express')

const rootDir = require('../util/path')

const router = express.Router();

const products = [];

// implicitly reached using GET '/admin/add-product'
router.get('/add-product', (req, res, next) => {// domain starts with /
    // res.send(`<form action="/admin/product" method="POST">
    //     <input type="text" name="title" />
    //     <button type="submit">Add Product</button>
    // </form>`) // res.send ends the middleware chain
    // res.sendFile(path.join(rootDir, 'views', 'add-product.html'))
    res.render('add-product', {pageTitle: 'Add Product', path:'/add-product'})

})

// implicitly reached using POST '/admin/product'
router.post('/product', (req, res, next) => {
    console.log("req.body", req.body)
    
    products.push({title: req.body.title })

    res.redirect('/')
})

// module.exports = router;
exports.routes = router;
exports.products = products;