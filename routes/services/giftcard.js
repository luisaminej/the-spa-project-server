const express = require('express')
const router =  express.Router()

const giftcardController = require('./../../controllers/services/giftcardController')





router.get('/', giftcardController.getGiftcard)


router.post('/create', giftcardController.createGiftcard)


router.post('/update', giftcardController.updateGiftcard)


router.post('/delete', giftcardController.deleteGiftcard)

 
module.exports = router