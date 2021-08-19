const express = require('express')
const router =  express.Router()

const servicesController = require('../../controllers/services/servicesController')

router.get('/:singleService', servicesController.getService)
router.get('/', servicesController.getServices)


module.exports = router