const express = require('express');
const router = express.Router();

const {index, dashboard} = require('../controllers/indexController')

/* app.use '/' */
router
.get('/',index)
.get('/dashboard', dashboard)

module.exports = router;