const express = require('express')
const router = express.Router()
const crearJefe = require('../controllers/Jefe.controllers')

router.post('/', crearJefe)
router.post('/login', crearJefe.login)

module.exports = router