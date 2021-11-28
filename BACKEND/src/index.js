const express = require('express');
const app = express();
const morgan = require('morgan');
const cors = require('cors');

//Requerimos nuestra base de datos DB
require('./database')

app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors({ origin:'*'}))

//RUTAS
app.use('/api/jefe', require('./routes/Jefe.route'))
app.use('/api/empleados', require('./routes/Empleado.route'))


//PUERTO
app.set('port', process.env.PORT || 4000 );
app.listen(app.get('port'), ()=>{
    console.log('app listening on port ' + app.get('port'))
})