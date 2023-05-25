const mongoose = require('mongoose');

const {
    URL_MONGO_DB_FINANZAS, 
    URL_MONGO_LOCAL

} = process.env;
//Conexion DataBase

// process.env.URI_MONGODB
const mongoDB =
    mongoose
    .connect(URL_MONGO_DB_FINANZAS, {
        useNewUrlParser: true,
        useUnifiedTopology: true
    })
    .then(()=>console.log('Conected to MongoDb Atlas'))
    .catch((error)=>console.error(error))   


module.exports = mongoDB;


