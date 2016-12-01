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
function subirImagen(fileURL) 
{
         
    var options = new FileUploadOptions();
    options.fileKey = "file";
    options.fileName = fileURL.substr(fileURL.lastIndexOf('/') + 1);
    options.mimeType="image/jpeg";
    options.chunkedMode = false;

    var ft = new FileTransfer();
    ft.upload(fileURL, encodeURI("http://server05.distritohosting.com/carbograf/subir.php"), uploadSuccess, uploadFail, options);
            }

            function uploadSuccess(r) {

            }

            function uploadFail(error) {
                alert("An error has occurred: Code = " + error.code+ " upload error source " + error.source+" upload error target " + error.target);
            }