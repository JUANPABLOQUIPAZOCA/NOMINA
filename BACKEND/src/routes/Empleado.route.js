const express = require('express')
const router = express.Router()
const crearEmpleado = require('../controllers/Empleado.controllers')

router.post('/', crearEmpleado)
router.get('/listar', crearEmpleado.listar)
router.get('/listar/:id', crearEmpleado.listarId)
router.get('/listarEmpleadoJefe/:id', crearEmpleado.empleadoDeunJefe)
router.delete('/eliminar/:id', crearEmpleado.eliminar)
router.put('/actualizar/:id', crearEmpleado.actualizar)
router.get('/buscar/:nombre/:id', crearEmpleado.buscar)



module.exports = router