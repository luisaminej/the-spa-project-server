const express = require('express')
const router =  express.Router()

const bodilyController = require('./../../controllers/services/bodilyController')


router.get('/', bodilyController.getBodily)

router.post('/create', bodilyController.createBodily)


router.post('/update', bodilyController.updateBodily)

router.post('/delete', bodilyController.deleteBodily)

 
module.exports = router