const express = require('express')
const router =  express.Router()

const bodyController = require('./../../controllers/products/bodyController')


router.get('/', bodyController.getBody)


router.post('/create', bodyController.createBody)


router.post('/update', bodyController.updateBody)



router.post('/delete', bodyController.deleteBody)

 
module.exports = router