// variables globales
let nombreJugador = d.querySelector(".jugador");
let listaJugadores = "jugadores";

// funcion para obtener los datos 
function obtenerDatos() {
    // crear objeto para los datos del jugador. 
    let datosJugador = {
        "nombre" : nombreJugador.textContent,
        "intentos" : totalIntentos,
        "tiempototal" : totalTiempo,
        "tiemporestante" : tiempoRestante
    }
    console.log(datosJugador);
    // pasar los datos del jugador
    guardarDatos(datosJugador);
}

// Funcion para guardar los datos en localStorage
function guardarDatos(datos) {
     //array para los datos antiguos y nuevos
     let jugadores = [];
     //tomar los datos guardados previamente en localStorage
     let datosPrevios = JSON.parse (localStorage.getItem(listaJugadores));
     if (datosPrevios != null) {
         jugadores = datosPrevios;
     }
     //guardar el nuevo jugador en el array
     jugadores.push(datos);
     // ese nuevo jugador se guarda en localStorage
     localStorage.setItem(listaJugadores, JSON.stringify(jugadores));
}

// mostrar datos en tabla 
function mostrarDatos() {
    //array para los datos antiguos y nuevos
    let jugadores = [];
    //tomar los datos guardados previamente en localStorage
    let datosPrevios = JSON.parse (localStorage.getItem(listaJugadores));
    if (datosPrevios != null) {
        jugadores = datosPrevios;
    }

    // organizar los jugadores - sirve para organizar los datos aray
    jugadores.sort((a, b)=>{
       // return -1;  los elementos de organizan de forma ascendente
       if (a.tiempototal < b.tiempototal) {
            return -1;
       }
       if (a.intentos < b.intentos) {
            return 1;
       }
    });

    // mostrar los datos en la tabla (i)= posicion del jugador
    jugadores.forEach((jugador, i) => {
         // crear fila
         let fila = d.createElement("tr");
         // crear columnas en la fila
         fila.innerHTML = `
             <td>${i+1}</td>
             <td>${jugador.nombre}</td>
             <td>${jugador.tiempototal}</td>
             <td>${jugador.intentos}</td>
             <td>${jugador.tiemporestante}</td>    
         `;
         tabla.appendChild(fila);
    });
}