const express = require("express");
const router = express.Router();
const Ingreso = require('../models/ingresos.model');

// Creando un ingreso
router.post('/ingresos/agregarIngreso', (req, res)=>{
  const ingreso = new Ingreso(req.body);
  ingreso
    .save()
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

//Obteniendo todos los ingresos
router.get('/ingresos', (req, res)=>{  
  Ingreso
   .find()
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }));
});

//Obteniendo un ingreso por su ID
router.post('/ingresos/edit', (req, res)=>{
  const _id = (req.body.id);  
   Ingreso
   .findById(_id)
   .then((data) => res.json(data))
   .catch((error) => res.json({ message: error }));
});

  //Actualizando un ingreso por su ID
 router.post('/ingresos/editIngreso', (req, res)=>{
  const { id, fecha, concepto, valor,  tipo } = req.body;
   Ingreso
    .updateOne({ _id: id }, { $set: { fecha, concepto, tipo, valor } })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
});

 //Eliminando un ingreso
 router.post('/ingresos/delIngreso', (req, res)=>{
  const { id } = req.body;
   Ingreso
    .deleteOne({ _id: id })
    .then((data) => res.json(data))
    .catch((error) => res.json({ message: error }));
 });


module.exports = router;
