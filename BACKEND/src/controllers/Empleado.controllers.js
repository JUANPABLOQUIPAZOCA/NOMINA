
const Empleado = require('../models/Usuario')

//Crear funcionalidad del empleado
crearEmpleado =async (req, res)=>{
     const {nombre, apellidos, cedula, puesto, tcontrato, jefe}= req.body;
     const NuevoEmpleado = new Empleado({
         nombre, 
         apellidos, 
         cedula, 
         puesto, 
         tcontrato, 
         jefe
     })
    
     const respuesta = await NuevoEmpleado.save()
     res.json({
         mensaje: 'Empleado creado',
         respuesta
     })
}
crearEmpleado.listar = async (req, res) => {
    const respuesta = await Empleado.find()
    res.json(respuesta)
}
crearEmpleado.listarId = async (req, res) => {
    const id = req.params.id;
    const respuesta = await Empleado.findOne({_id: id})
    res.json(respuesta)

}
crearEmpleado.empleadoDeunJefe = async(req, res) =>{
    const id = req.params.id;
    const respuesta = await Empleado.find({jefe:id})
    res.json(respuesta)
}
crearEmpleado.eliminar = async(req, res) =>{
    const id = req.params.id;
    await Empleado.findByIdAndRemove({_id: id})
    res.json({
        mensaje: 'Empleado eliminado'
    })
}
crearEmpleado.actualizar = async(req, res) =>{
    const id = req.params.id
    await Empleado.findByIdAndUpdate({_id: id}, req.body)
    res.json({
        mensaje: 'Empleado actualizado'
    })
}
crearEmpleado.buscar = async(req, res) =>{
    const {nombre, id} = req.params
    const respuesta = await Empleado.find({nombre:{$regex: '.*' + nombre + '.*'}, jefe: id})
    res.json(respuesta)
}

module.exports = crearEmpleado