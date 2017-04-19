'use strict'

//cargamos la librería o módulo
var mongoose=require('mongoose');
//Cargamos el fichero con la carga de EXPRESS
var app = require ('./app');
//cargamos el fichero del servidor
var port = process.env.PORT || 3977;
//indicamos la conexión a la BD mediante su url
mongoose.connect('mongodb://localhost:27017/curso-mean2',(err, res)=>{
  if(err){
    throw err;
  }else{
    console.log("La conexión a la base de datos está funcionando correctamente...");
//ponemos el servidor a escuchar
    app.listen(port,function(){
      console.log("Servidor del api rest de musica escuchando en http://localhost:"+port);
    })

  }
});
