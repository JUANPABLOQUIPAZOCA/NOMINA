const mongoose = require('mongoose');
const uri = 'mongodb+srv://juanpis:LILOYBRENDA@cluster0.wn3ct.mongodb.net/BACKEND?retryWrites=true&w=majority';
const options = {useNewUrlParser:true, useUnifiedTopology:true}

mongoose.connect(uri, options).then(
    ()=>{ console.log('Conectado a DB')},
    err=>{ console.log(err)}
);

module.exports = mongoose