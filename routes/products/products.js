const express = require('express')
const router =  express.Router()

const productsController = require('../../controllers/products/productsController')

router.get('/:singleProduct', productsController.getProduct)
router.get('/', productsController.getProducts)



module.exports = router