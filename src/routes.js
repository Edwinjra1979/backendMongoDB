//RUTAS GLOBALES
const router = require('express').Router();

router.use('/api', require('./api/ingresos/ingresos.crud'));


module.exports = router;