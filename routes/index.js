const express = require('express');
const router = express.Router();

const {index, dashboard, auth} = require('../controllers/indexController')

router
.get('/',index)
.get('/dashboard', dashboard)
.get('/auth', auth)

module.exports = router;