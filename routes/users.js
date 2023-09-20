const express = require('express');
const router = express.Router();

const {login, register, loginProcess, registerProcess,logout} = require('../controllers/userController')
const registerUserValidation = require('../validations/registerUserValidation')
const loginUserValidation = require('../validations/loginUserValidation')

/* app.use '/users' */
router
.get('/register', register)
.post('/register',registerUserValidation, registerProcess)
.get('/login', login)
.post('/login',loginUserValidation, loginProcess)
.get('/logout',logout)

module.exports = router;
