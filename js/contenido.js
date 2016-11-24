//Funciones para agregar contenido




function llenar_home()
{
    var acumulador="";

    for(i=0;i<productos.length;i++)
    {   
        
       
        if(i % 2 == 0)
        {
            acumulador=acumulador+'<div class="ui-bl caja-producto"><a href="#detalle-producto"><img class="col-xs-12" onclick="producto('+productos[i].id+')" src="'+productos[i].imagen+'" ><p class="titulo-producto col-xs-12">'+productos[i].nombre+'</p></a><p class="col-xs-12 desc-producto">'+productos[i].descripcioncorta+'</p></div>';
        
        }
        else
        {
             acumulador=acumulador+'<div class="ui-blo caja-producto"><a href="#detalle-producto"><img class="col-xs-12" onclick="producto('+productos[i].id+')" src="'+productos[i].imagen+'" ><p class="titulo-producto col-xs-12">'+productos[i].nombre+'</p></a><p class="col-xs-12 desc-producto">'+productos[i].descripcioncorta+'</p></div>';
        }
    }   

$("#contenedor-productos").html(acumulador);
}




function producto(id)
{
    var titulo,imagen,descripcion;

    for(i=0;i<productos.length;i++)
    {
        if(productos[i].id==id)
        {
            titulo=productos[i].nombre;
            imagen=productos[i].imagen;
            descripcion=productos[i].descripcion;
        }

    }

    $("#titulo-producto-single").html(titulo);
    $("#img-single").attr("src",imagen);
    $("#descripcion-detalle").html(descripcion);

}