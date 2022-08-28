let total = 0;

let cantidad = 1;

let precio = 0;

let operacion = 1 // se va a usar el 1 como verdadero y el 0 para salir de la operacion

function elegirProducto(item){

   item = prompt("Que repuesto es el que elige \n 1-Bujia \n 2-Manija \n 3-Cremallera \n 4-Pata");

   switch(item){

    case "1":
        precio = 910;
        break;

    case "bujia":
        precio = 910;
        break;

    case "Bujia":
        precio= 910;
        break;

    case "2":
        precio = 3800;
        break;
    case "manija":
        precio = 3800;
        break;

    case "Manija":
        precio= 3800;
        break;

    case "3":
        precio = 1010;
        break;

    case "cremallera":
        precio = 1010;
        break;

    case "Cremallera":
        precio= 1010;
        break;
    
    case "4":
        precio = 4840;
        break;

    case "pata":
        precio = 4840;
        break;

    case "Pata":
        precio= 4840;
        break;
   }

}


function elegirCantidad(numero){


    cantidad = parseInt(prompt("Cuantas unidades necesita del repuesto?"));
}

function validarOperacion(sigue){

    operacion = parseInt(prompt("Quiere seleccionar un articulo? \n Apretar 1 para elegir \n Apretar 0 para salir"));
}
while (operacion !== 0){
    
    validarOperacion();

    if (operacion == 1){
        
        elegirProducto();
        elegirCantidad();

         total = total + precio * cantidad;

        console.log("La cuenta que hace el programa es " + precio + " x " + cantidad + "= " + precio*cantidad);
    

    }

    

    alert("Usted en el carrito tiene un total de " + total);
}