const express = require('express')

const productsController = require('../controllers/products')

const router = express.Router()

// implicitly reached using GET '/admin/add-product'
router.get('/add-product', productsController.getAddProduct)

// implicitly reached using POST '/admin/product'
router.post('/product', productsController.postAddProduct)

// module.exports = router;
module.exports = router
