const Product = require('../models/product')

exports.getAddProduct = (req, res, next) => {
  res.render('add-product', {
    pageTitle: 'Add Product',
    path: '/admin/add-product',
  })
}

exports.postAddProduct = (req, res, next) => {
  console.log('req.body', req.body)

  const product = new Product(req.body.title)
  product.save()

  res.redirect('/')
}

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) =>
    res.render('shop', {
      prods: products,
      pageTitle: 'Shop',
      path: '/',
    })
  ) //we defined the default template engine, and access folder in app.js)
}
