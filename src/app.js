require("dotenv").config(); 				                    
const express = require('express');
const routesIngresos = require('./api/ingresos/ingresos.crud');
const routesIngresosFilters = require('./api/ingresos/ingresos.filters');

require('./mongodb.conexion'); 


const app = express();
const port = process.env.PORT || 4000;

//middleware
app.use(express.json());
app.use(express.urlencoded({extended:true}));


app.use('/api', routesIngresos);
app.use('/api', routesIngresosFilters);

// app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('server listening on port', port));