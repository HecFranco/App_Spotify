'user strict'

//Cargamos el modelo de Mongoose para poder acceder a la BD
var mongoose = require ('mongoose');
//definimos la variable que gestionará el esquema de la Base de datos
var Schema = mongoose.Schema;
var SongSchema=Schema({
    number:Number,
    name:String,
    duration:Number,
    file:String,
    album:{ type:Schema.ObjectId, ref:'Album'}
});
//para exportar el modelo
module.exports = mongoose.model('Song',SongSchema);