const express = require('express');
const router = express.Router();

const {index,aboutUs, dashboard} = require('../controllers/indexController')

/* app.use '/' */
router
.get('/',index)
.get('/aboutUs', aboutUs)
.get('/dashboard', dashboard)

module.exports = router;