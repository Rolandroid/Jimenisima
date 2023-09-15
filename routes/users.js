const express = require('express');
const router = express.Router();

const {login, register, loginProcess, registerProcess} = require('../controllers/userController')

/* app.use '/users' */
router
.get('/login', login)
.post('/login', loginProcess)
.get('/register', register)
.post('/register', registerProcess)

module.exports = router;
