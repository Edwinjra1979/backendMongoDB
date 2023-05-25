const mongoose = require('mongoose');


const ingresoSchema = new mongoose.Schema({
    fecha: {
        type: String,
        required: true
    },
    concepto: {
        type: String,
        required: true
    },   
    tipo: {
        type: String,
         required: true
    },
    valor: {
        type: Number,
         required: true
    }
});
const Ingreso =  mongoose.model('Ingreso', ingresoSchema);


module.exports = Ingreso