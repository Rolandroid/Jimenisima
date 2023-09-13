const express = require('express');
const router = express.Router();

const {index, dashboard} = require('../controllers/indexController')

router
.get('/',index)
.get('dashboard', dashboard)


module.exports = router;