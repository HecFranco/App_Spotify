'user strict'

//Cargamos el modelo de Mongoose para poder acceder a la BD
var mongoose = require ('mongoose');
//definimos la variable que gestionará el esquema de la Base de datos
var Schema = mongoose.Schema;
var UserSchema=Schema({
    name:String,
    surname:String,
    emal:String,
    password:String,
    role:String,
    image:String
});
//para exportar el modelo
module.exports = mongoose.model('User',UserSchema);