const express = require('express');
const router = express.Router();
const ingresoSchema = require("../models/ingresos.model");


//Obtiene la suma total de los ingresos
router.post('/ingresos/ingresoTotal', (req, res)=>{  
  ingresoSchema
  .aggregate([
    { $group: { _id: "$tipo", ingresoTotal: { $sum: "$valor" } } }
  ])
  .then((data) => res.json(data)) 
  .catch((error) => res.json({ message: error }));
 
});




module.exports = router;