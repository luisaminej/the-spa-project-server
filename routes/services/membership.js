const express = require('express')
const router =  express.Router()

const membershipController = require('./../../controllers/services/membershipController')



router.get('/', membershipController.getMembership)


router.post('/create', membershipController.createMembership)


router.post('/update', membershipController.updateMembership)



router.post('/delete', membershipController.deleteMembership)

 
module.exports = router