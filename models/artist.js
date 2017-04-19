'user strict'

//Cargamos el modelo de Mongoose para poder acceder a la BD
var mongoose = require ('mongoose');
//definimos la variable que gestionará el esquema de la Base de datos
var Schema = mongoose.Schema;
var ArtistSchema=Schema({
    name:String,
    description:String,
    image:String,
});
//para exportar el modelo
module.exports = mongoose.model('Artist',ArtistSchema);