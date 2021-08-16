const express = require('express')
const router =  express.Router()

const faceController = require('./../../controllers/products/faceController')


router.get('/', faceController.getFace)

router.post('/create', faceController.createFace)

router.post('/update', faceController.updateFace)


router.post('/delete', faceController.deleteFace)

 
module.exports = router