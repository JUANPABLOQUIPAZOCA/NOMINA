const mongoose = require('mongoose');

const JefeSchema = mongoose.Schema({
    nombre : {
        type:String
    },
    correo : {
        type:String
    },
    contraseña : {
        type:String
    }
})

module.exports = mongoose.model('Jefe', JefeSchema)
