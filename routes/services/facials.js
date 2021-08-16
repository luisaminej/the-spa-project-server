const express = require('express')
const router =  express.Router()

const facialsController = require('./../../controllers/services/facialsController')



router.get('/', facialsController.getFacials)


router.post('/create', facialsController.createFacials)


router.post('/update', facialsController.updateFacials)



router.post('/delete', facialsController.deleteFacials)

 
module.exports = router