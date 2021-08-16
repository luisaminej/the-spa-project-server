const express = require('express')
const router =  express.Router()

const massageController = require('./../../controllers/services/massageController')


router.get('/', massageController.getMassage)


router.post('/create', massageController.createMassage)


router.post('/update', massageController.updateMassage)



router.post('/delete', massageController.deleteMassage)

 
module.exports = router