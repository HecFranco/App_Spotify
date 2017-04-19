'user strict'

//Cargamos el modelo de Mongoose para poder acceder a la BD
var mongoose = require ('mongoose');
//definimos la variable que gestionará el esquema de la Base de datos
var Schema = mongoose.Schema;
var AlbumSchema=Schema({
    title:String,
    description:String,
    year:Number,
    image:String,
    //la propiedad Artist guardará el Id del objeto de la BD que será de tipo Artist
    artist:{ type: Schema.ObjectId, ref:'Artist'}
});
//para exportar el modelo
module.exports = mongoose.model('Album',AlbumSchema);