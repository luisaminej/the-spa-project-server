const express = require('express')
const router = express.Router()

const { check } = require('express-validator')

const userController = require('./../controllers/userController')


router.post(
    "/create", 
    [
        check("username", "El nombre es obligatorio").not().isEmpty(),
        check("email", "Agrega un email válido").isEmail(),
        check("password", "El password debe ser mínimo de 6").isLength({min: 6})
    ]  
    ,userController.createUser)

module.exports = router