const express = require("express");
const router = express.Router();
const Ingreso = require('../models/ingresos.model');

// Creando un ingreso
router.post('/agregarIngreso',  async (req, res)=>{
  const ingreso = new Ingreso(req.body);
  const data = await ingreso.save()
  try {res.json(data)} 
  catch (error) {res.json({ message: error })}

});

//Obteniendo todos los ingresos
router.get('/ingresos/todos', async (req, res)=>{ 
   const data = await Ingreso.find()
   try {res.json(data)} 
   catch (error) {res.json({ message: error })}
   
});

//Obteniendo un ingreso por su ID
router.post('/ingresos/edit', async (req, res)=>{
  const _id = (req.body.id);  
   const data = await Ingreso.findById(_id);
   try {res.json(data)} 
   catch (error) {res.json({ message: error })}
});

  //Actualizando un ingreso por su ID
 router.post('/ingresos/editIngreso', async (req, res)=>{
  const { id, fecha, concepto, valor,  tipo } = req.body;
   const data = await Ingreso.updateOne({ _id: id }, { $set: { fecha, concepto, tipo, valor } })
   try {res.json(data)}
   catch (error) {res.json({ message: error })}
});

 //Eliminando un ingreso
 router.post('/ingresos/delIngreso', async (req, res)=>{
  const { id } = req.body;
   const data = await Ingreso.deleteOne({ _id: id })
   try {res.json(data)} 
   catch (error) {res.json({ message: error })}
 });


module.exports = router;
