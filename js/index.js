/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */
var app = {
    // Application Constructor
    initialize: function() {
        this.bindEvents();
    },
    // Bind Event Listeners
    //
    // Bind any events that are required on startup. Common events are:
    // 'load', 'deviceready', 'offline', and 'online'.
    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },
    // deviceready Event Handler
    //
    // The scope of 'this' is the event. In order to call the 'receivedEvent'
    // function, we must explicitly call 'app.receivedEvent(...);'
    onDeviceReady: function() {
        app.receivedEvent('deviceready');
        pictureSource=navigator.camera.PictureSourceType; 
        destinationType=navigator.camera.DestinationType; 
         
    },
    // Update DOM on a Received Event
    receivedEvent: function(id) {
        var parentElement = document.getElementById(id);
        var listeningElement = parentElement.querySelector('.listening');
        var receivedElement = parentElement.querySelector('.received');

        listeningElement.setAttribute('style', 'display:none;');
        receivedElement.setAttribute('style', 'display:block;');

        console.log('Received Event: ' + id);
    }
};

//Funciones de diseño para la app


$("document").ready(function(){
     $( "#mypanel" ).panel( "open" );
});

$("#mypanel").panel().enhanceWithin();

$("document").on("swiperight",function(){

 $( "#mypanel" ).panel( "open" );

});

$("body").on("swiperight",function(){

 $( "#mypanel" ).panel( "open" );

});

$(window).load(function(){
	$('#contenedor-productos').masonry();
});

$("document").ready(function(){

 $( "#mypanel" ).panel( "open" );

});


$("#enviar").click(function(){
        
      
   
    
        var cemail= $("#ccorreo").val();
        var cauthor= $("#crazon").val();
        var csubject= $("#casunto").val();
        var ccontent= $("#cmensaje").val();



     if(cemail!=""&&cauthor!=""&&csubject!=""&&ccontent!="")
    {   
            $.ajax({
            type: "GET",
            url: "http://server05.distritohosting.com/carbograf/enviocorreo.php",
            data:{email:cemail,
                  subject:csubject,
                  author:cauthor,
                  content:ccontent  
            },
            dataType:"json",
            beforeSend: function () {
                    

                    },

             success:function(){    

                alert("Su mensaje fue enviado correctamente.");
                $("#ccorreo").val("");
                $("#crazon").val("");
                $("#casunto").val("");
                $("#cmensaje").val("");
            },error:function()
            {
                alert("Ocurrio un error, verifique su conexión antes de continuar.")
            }
            });

    }
    else
    {
        alert("Por favor ingrese todos los campos.");
    }

      
    
    
return false;
});



$("document").ready(llenar_home());

// $("#ubicanos").live("pageshow",function(){
// $('#map').gmap({ 'center': new google.maps.LatLng(10.174973,-67.973633),
//                     'zoom':17 });   });


//Manejar las caracteristicas del gráfito en la cotización

function agregarcrt()
{
        var caracteristica = $("#caract").val();
        var valor = $("#opc-caract").val();

    if(valor=="")
    {
        alert("Ingrese algún valor a la caracteristica:");
    } 
    else
    { 

        if(caracteristica=="tvoltaje")
        {
            $("#"+caracteristica).html("VOLTAJE = "+valor+"<input style='margin-left:0.5em;' class='quitar' type='button' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tamperaje")
        {
            $("#"+caracteristica).html("AMPERAJE = "+valor+"<input style='margin-left:0.5em;' class='quitar' type='button' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="trpm")
        {
            $("#"+caracteristica).html("R.P.M = "+valor+"<input style='margin-left:0.5em;'  class='quitar' type='button' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tpieza")
        {
            $("#"+caracteristica).html("CANTIDAD DE PIEZAS = "+valor+"<input style='margin-left:0.5em;' class='quitar' type='button' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tespesor")
        {
            $("#"+caracteristica).html("ESPESOR = "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tlargo")
        {
            $("#"+caracteristica).html("LARGO= "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tancho")
        {
            $("#"+caracteristica).html("ANCHO = "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tdiametroe")
        {
            $("#"+caracteristica).html("DIAMETRO EXTERNO = "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tdiametroi")
        {
            $("#"+caracteristica).html("DIAMETRO INTERNO = "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
        else
        if(caracteristica=="tlongitud")
        {
            $("#"+caracteristica).html("LONGITUD = "+valor+"<input style='margin-left:0.5em;' type='button' class='quitar' value='X' onClick='quitar(&#34"+caracteristica+"&#34)' />");
        }
    }

}

// quitar el valor de la caracteristica de la cotización.

function quitar(crt)
{
    $("#"+crt).html("");
}  


//enviar la cotización y subir la imagen al servidor

function enviarcot(){
        
      
        $(".quitar").remove();
        
        var img=$("#img-grafito").attr("src");
        var razon= $("#trazon").val();
        var persona= $("#tpersona").val();
        var email= $("#temail").val();
        var numero= $("#tnumero").val();
        var obs=$("#tobservaciones").val();
        var crt= $(".carateristicas").html();


        

     if(razon!=""&&persona!=""&&email!=""&&numero!="")
    {   
            
        if(img!="img/iconos/agregar.png")
        {


            
            var file="http://server05.distritohosting.com/carbograf/"+fichero.substr(fichero.lastIndexOf('/')+1);
            var enviar="<div><h1 style='text-align:center;border:1px solid red;background:gray;'>COTIZACIÓN:</h1><div style='padding:0.5em;font-weight:bold;'><div>Razón social: "+razon+" </div><div>Número de télefono: "+numero+" </div><div>Persona Contacto:"+persona+"</div><div>Email:"+email+"</div><div>Caracteristicas:"+crt+"</div><div>Observaciones:"+obs+"</div><div>Dibujo del gráfito <div><img src='"+file+"' style='max-width:100%;'></div></div></div></div>"
           

            $.ajax({
            type: "GET",
            url: "http://server05.distritohosting.com/carbograf/enviocorreo.php",
            data:{enviar:enviar,
                  author:razon 
            },
            dataType:"json",
            beforeSend: function () {
                    
                         

                        $.mobile.loading( 'show', {
                            text: 'Enviando',
                            textVisible: true,
                            theme: 'a',
                            html: ""
                        });
                        subirImagen(fichero);
                    },

             success:function(){    

                        $.mobile.loading( 'hide', {
                            text: 'Enviando',
                            textVisible: true,
                            theme: 'a',
                            html: ""
                        });
                alert("Su mensaje fue enviado correctamente.");
                limpiar_cot();

            },error:function()
            {
                alert("Ocurrio un error, verifique su conexión antes de continuar.");
                limpiar_cot();
            }
            });
        }
        else
        {
            alert("Tome la foto del gráfito.");
        }
    }
    else
    {
        alert("Ingrese todo los datos de contacto.");
    }

      

}


function limpiar_cot()
{
    $("#trazon").val("");
    $("#temail").val("");
    $("#tnumero").val("");
    $("#trazon").val("");
    $("#tpersona").val("");
    $("#opc-caract").val("");
    $("#tobservaciones").val("");
    $("#tvoltaje").html("");
    $("#tamperaje").html("");
    $("#tlongitud").html("");
    $("#trpm").html("");
    $("#tpieza").html("");
    $("#tespesor").html("");
    $("#tancho").html("");
    $("#tlargo").html("");
    $("#tdiametroi").html("");
    $("#tdiametroe").html("");
    $("#tlongitud").html("");
    $("#img-grafito").attr("src","img/iconos/agregar.png");
}




$( "#detalle-producto" ).on( "pagebeforeshow", function() { limpiar_cot();} )