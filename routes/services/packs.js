const express = require('express')
const router =  express.Router()

const packsController = require('./../../controllers/services/packsController')



router.get('/', packsController.getPacks)


router.post('/create', packsController.createPacks)


router.post('/update', packsController.updatePacks)



router.post('/delete', packsController.deletePacks)

 
module.exports = router