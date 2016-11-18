//Funciones para agregar contenido

$("document").ready(function(){

var acumulador="";

    for(i=0;i<productos.length;i++)
    {   
        
       
    	if(i % 2 == 0)
    	{
    		acumulador=acumulador+'<div class="ui-bl caja-producto"><a href="#"><img class="col-xs-12" src="'+productos[i].imagen+'" ><p class="titulo-producto col-xs-12">'+productos[i].nombre+'</p></a><p class="col-xs-12 desc-producto">'+productos[i].descripcioncorta+'</p></div>';
    	
    	}
    	else
    	{
    		 acumulador=acumulador+'<div class="ui-blo caja-producto"><a href="#"><img class="col-xs-12" src="'+productos[i].imagen+'" ><p class="titulo-producto col-xs-12">'+productos[i].nombre+'</p></a><p class="col-xs-12 desc-producto">'+productos[i].descripcioncorta+'</p></div>';
    	}
    }   

$("#contenedor-productos").html(acumulador);
$("col").css({


})

});