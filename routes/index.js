const express = require('express');
const router = express.Router();

const {index, dashboard} = require('../controllers/IndexController')

/* app.use '/' */
router
.get('/',index)
.get('/dashboard', dashboard)

module.exports = router;