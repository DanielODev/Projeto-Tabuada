const express = require('express')
const router = express.Router()

//impotar o index do controllers
const indexController = require('../controllers/index')

router.get('/', indexController.home)

module.exports = router