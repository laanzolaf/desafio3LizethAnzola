
// Ingreso de información por el usuario
let bebidaEscogida = " ";
let entradaNombre = prompt("Ingresa tu nombre: ");

while (entradaNombre == "") {
    alert("Debes escribir tu nombre");
    entradaNombre = prompt("Ingresa tu nombre: ");
}

let entradaEdad = "";
entradaEdad = prompt("Ingresa tu edad: ");

while (entradaEdad  == "") {
    alert("Debes escribir tu edad");
    entradaEdad = prompt("Ingresa tu edad: ");
}

entradaEdad = parseInt(entradaEdad);


// Array de osbejetos (desafío 3)
const bebidas = [{id: 1, nombre: "Vino", informacion: "El vino  es una bebida obtenida de la uva mediante la fermentación alcohólica de su mosto o zumo"},
                    {id: 2, nombre: "Cerveza", informacion: "La cerveza es una bebida alcohólica, no destilada, de sabor amargo, que se fabrica con granos de cebada germinados u otros cereales cuyo almidón se fermenta en agua con levadura y se aromatiza a menudo con lúpulo, entre otras plantas."},
                    {id: 3, nombre: "Vodka", informacion: "El vodka es una bebida destilada. Se discute el origen de la misma aunque el nombre actual es ruso. Se produce generalmente a través de la fermentación de granos y otras plantas ricas en almidón, como el centeno, trigo, patata o remolacha." }];



if(entradaEdad < 18){
    alert("Lo siento " + entradaNombre +" pero no puedes interactuar en la página, porque eres menor de edad.")
} else {

    alert("¡Te doy la bienvenida " + entradaNombre +"! Aquí encontrarás todo sobre tus bebidas favoritas.")
    
    while(bebidaEscogida!=""){
        bebidaEscogida = prompt("Escribe la bebida de la que quieres saber: vino, cerveza o vodka");

        while (bebidaEscogida  == "") {
            alert("Lo siento. Debes escoger una bebida entre vino, cerveza o vodka.");
            bebidaEscogida = prompt("Escribe la bebida de la que quieres saber: vino, cerveza o vodka");
        }

        switch(bebidaEscogida.toLowerCase()){
            case "vino":
                alert(bebidas[0].informacion)
                console.log("El usuario " + entradaNombre + " cosultó sobre vinos.")
                bebidaEscogida = "";
                break
            case "cerveza":
                alert(bebidas[1].informacion)
                console.log("El usuario " + entradaNombre + " cosultó sobre cervezas.")
                bebidaEscogida = "";
                break
            case "vodka":
                alert(bebidas[2].informacion)
                console.log("El usuario " + entradaNombre + " cosultó sobre vodkas.")
                bebidaEscogida = "";
                break

        }
    }

    let agregar = prompt("¿Quieres agregar información de otra bebida? Responde si o no");

    if (agregar.toLowerCase() == "no") {
        alert("Está bien " + entradaNombre + ". ¡Hasta la próxima!")

    } else {

        let nombreBebidaAgregada = prompt("¿Cuál es el nombre de la bebida que quieres agregar a nuestro sitio?");
        while (nombreBebidaAgregada  == "") {
            alert("Debes escribir el nombre de la bebida que quieres agregar.");
            nombreBebidaAgregada = prompt("¿Cuál es el nombre de la bebida que quieres agregar a nuestro sitio?");
        }

        let infoBebidaAgregada = prompt("¿Cuál es la información de la bebida que quieres agregar a nuestro sitio?");
        while (infoBebidaAgregada  == "") {
            alert("Debes escribir una descipción o información de la bebida que quieres agregar.");
            infoBebidaAgregada = prompt("¿Cuál es la información de la bebida que quieres agregar a nuestro sitio?");
        }

        const bebidaAgregada = { id:4, nombre:nombreBebidaAgregada, informacion:infoBebidaAgregada}

        bebidas.push(bebidaAgregada);

        for (const bebida of bebidas) {
            console.log(bebida.nombre)
            console.log(bebida.informacion)
        }

        alert("Gracias " + entradaNombre + " la bebida " + nombreBebidaAgregada + " ha sido agregada a nuestra base exitosamente")


    }

}






