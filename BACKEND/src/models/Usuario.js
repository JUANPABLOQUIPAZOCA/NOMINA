const mongoose = require('mongoose');
const {schema} = mongoose;

const UsuarioSchema = mongoose.Schema({
    nombre : String,
    apellidos : String,
    cedula : String,
    puesto : String,
    tcontrato : String,
    jefe : String
})

module.exports = mongoose.model('Usuario', UsuarioSchema)