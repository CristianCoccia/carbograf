var fichero; //tendrá la ruta de la imagen a enviarfunction ObtenerFoto() //obtenemos la foto de la camara
function obtenerfoto()
{
navigator.camera.getPicture(correcto, error, { quality: 100, allowEdit: false });
}
function correcto(rutaImagen) //hemos obtenido la imagen correctamente
{
document.getElementById("img-grafito").src = rutaImagen;
fichero=rutaImagen;
}
function error(message) //en caso de error en la captura mostramos una ventana con la información
{
alert ("Error => " + message);
}
function enviardatos()
{
var options = new FileUploadOptions();
options.fileKey="file"; //nombre del campo que recogera el servidor
options.fileName=fichero.substr(fichero.lastIndexOf('/')+1); //nombre del fichero
options.mimeType="image/jpeg"; //tipo de imagen
options.chunkedMode = true;var params = new Object(); //creamos el objeto que tendrá los datos que le pasaremos al servidor
params.descripcion = document.getElementById("descripcion").value; //asignamos al parametro descripcion el dato de la caja de texto
options.params = params;
var ft = new FileTransfer();ft.upload(fichero, "http://server05.distritohosting.com/carbograf/subir.php", win, fail, options); //enviamos los datos
}
function win(r) //respuesta del servidor si todo fue ok
{
alert("RESPUESTA SERVIDOR = " + r.response);
}
function fail(error) //respuesta del servidor si hubo algun error
{
alert("upload error source " + error.source);
alert("upload error target " + error.target);
alert("An error has occurred: Code = " + error.code);
}﻿