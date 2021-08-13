const express = require('express')
const router = express.Router()
const authController = require('./../controllers/authController')

const auth = require('./../middlewares/auth')


router.post('/login', authController.loginUser)


router.get("/", auth, authController.verifyingToken)



module.exports = router