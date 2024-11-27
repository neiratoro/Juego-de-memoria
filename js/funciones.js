// variables globales
const d = document;

// imagenes del juego
let imgN1 = [
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
];
let imgN2 = [
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
  { nombre: "Barbie7", url: "imagenes/img10.webp" },
  { nombre: "Barbie7", url: "imagenes/img10.webp" },
  { nombre: "Barbie8", url: "imagenes/img7.jpg" },
  { nombre: "Barbie8", url: "imagenes/img7.jpg" },
 

];
let imgN3 = [
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
  { nombre: "Barbie1", url: "imagenes/img2.jpg" },
  { nombre: "Barbie2", url: "imagenes/img3.jpg" },
  { nombre: "Barbie3", url: "imagenes/img4.jpg" },
  { nombre: "Barbie4", url: "imagenes/img5.png" },
  { nombre: "Barbie5", url: "imagenes/img9.webp" },
  { nombre: "Barbie6", url: "imagenes/img8.jpg" },
  { nombre: "Barbie7", url: "imagenes/img10.webp" },
  { nombre: "Barbie7", url: "imagenes/img10.webp" },
  { nombre: "Barbie8", url: "imagenes/img7.jpg" },
  { nombre: "Barbie8", url: "imagenes/img7.jpg" },
  { nombre: "Barbie11", url: "imagenes/img11.jpg"},
  { nombre: "Barbie11", url: "imagenes/img11.jpg"},
  { nombre: "Barbie12", url: "imagenes/img12.webp"},
  { nombre: "Barbie12", url: "imagenes/img12.webp"},
  
 

];
// seleccionar el tablero del html
let tablero = d.querySelector(".tablero");
let nombreImg = []; // guardar los nombres de img
let idImg = []; // guaradr los posiciones de id
let aciertos = 0; // a a contar la cantidad de aciertos, al ser contador se inicializa en 0.
let totalIntentos = 0;
let totalTiempo = 0;
let tiempoRestante = 0;
let intentos = 0;
let tiempo = 60;
let nivel = 1;
let mostrarNivel = d.querySelector(".nivel");
let mostrarIntentos = d.querySelector(".intentos"); // variables que van a mostrar la informacion en nav. 
let mostrarAciertos = d.querySelector(".aciertos");
let mostrarTiempo = d.querySelector(".tiempo");
let tiempoTranscurrido;  // variable global vacia, porque se utilizará en otras funciones.
let btnIniciar = d.querySelector(".btn-iniciar");
let imagenNivel;
let estoyJugando = false;
let sonidoSeleccionar = new Audio("./sonidos/seleccion.mp3");
let sonidoAdivinar = new Audio("./sonidos/adivinar.mp3");
let sonidoFallar = new Audio("./sonidos/fallar.mp3");
let sonidoPerder = new Audio("./sonidos/perder.mp3");
let sonidoGanar = new Audio("./sonidos/ganar.mp3");
let sonidoTiempo = new Audio("./sonidos/tiempo.mp3");
let mostrarJugador = d.querySelector(".jugador");
let tabla = d.querySelector(".records tbody"); // porque en tbody van los registros
let fondoBody = d.querySelector("body");

//setTimeout(); // se ejecuta una vez, cuando pase determinado tiempo.
//setInterval(); // funcion que se ejecuta durante cierto intervalo de tiempo- infinitamente

d.addEventListener("DOMContentLoaded", ()=>{
    fondoBody.classList.add("fondo1");
    mostrarDatos();
});


// agregar evento al boton para iniciar el juego
btnIniciar.addEventListener("click", function(){
      //alert("juego iniciado");
      // comprobar que el boton juego este activo
      if(estoyJugando == false && nivel == 1){
         ventanaModal();
      } else if(estoyJugando == false && nivel == 2){
        estoyJugando == true;
        nivel2();
      }else if(estoyJugando == false && nivel == 3){
        estoyJugando == true;
        nivel3();
      }

});

// funcion para agregar imagenes del tablero
// i : posicion de cada imagen
function agregarImagenes() {
  // poner imagenes dependiendo el nivel.
  if(nivel == 1){
    imagenNivel = imgN1;
  } else if(nivel == 2){
    imagenNivel = imgN2;  
  }else if(nivel == 3){
    imagenNivel = imgN3;  
  }

  // colocar imagenes aleatorias
  imagenNivel.sort(()=> Math.random() -0.5);

  // recorrer con un foreach las img del array
  imagenNivel.forEach((img, i) => {
    let div = d.createElement("div"); // crear DIV
    div.className = "col-3 my-2"; // agregar clase al div
    let imagen = d.createElement("img"); // crear imagen
    imagen.src = "imagenes/ocultar.jpg"; // agregar la ubiccaion de la img
    imagen.className = "img-fluid altura"; // agregar clase a la img
    imagen.id = i; // agregar identificador a cada imagen
    imagen.addEventListener("click", mostrarImagenes)
    div.appendChild(imagen); // agregar la img al div
    tablero.appendChild(div); // agregar el div al tablero
  });
}

// funcion para comparar img
function compararImagenes(){
  let allImg = d.querySelectorAll(".tablero .col-3 img");
  // veridfica s las img son iguales
  if (nombreImg[0] == nombreImg[1]) {
    if (idImg[0] != idImg[1]){
      //alert("muy bien descubriste la imagen😁");
      sonidoAdivinar.play();
    allImg[idImg[0]].src = "imagenes/ok.jpg";
    allImg[idImg[1]].src = "imagenes/ok.jpg";
    allImg[idImg[0]].removeEventListener("click", mostrarImagenes);
    allImg[idImg[1]].removeEventListener("click", mostrarImagenes);
    aciertos++; // cuenta los aciertos
    mostrarAciertos.textContent = aciertos;
      
    }else{
      alert("Debes escoger otra imagen");
      allImg[idImg[0]].src = "imagenes/ocultar.jpg";
      intentos++;
      mostrarIntentos.textContent = intentos;
    }
    

  } else{
    //alert("Sigue intentando😉");
    sonidoFallar.play();
    allImg[idImg[0]].src = "imagenes/ocultar.jpg";
    allImg[idImg[1]].src = "imagenes/ocultar.jpg";
    intentos++;
    mostrarIntentos.textContent = intentos;
  }
  // reiniciar las variables
  nombreImg = [];
  idImg= [];

  // comprobar si se adivinaron todas las imagenes
  if (nivel == 1 && aciertos == 6) {
      alert("🎉🎉FELICITACIONES PASASTE AL SIGUIENTE NIVEL  !! 🎉🎉");
      fondoBody.classList.replace("fondo1", "fondo2");
      //location.reload(); // recarga la pagina.
      totalIntentos += intentos;
      totalTiempo += tiempo;
      tiempoRestante += (60 - tiempo);
      obtenerDatos();
      sonidoGanar.play();
      nivel++;
      mostrarNivel.textContent = nivel;
      intentos = 0;
      mostrarIntentos.textContent = intentos;
      aciertos = 0;
      mostrarAciertos.textContent = aciertos;
      clearInterval(tiempoTranscurrido);
      tiempo = 50;
      mostrarTiempo.textContent = tiempo;
      estoyJugando == false;
      quitarImg();


  }else if(nivel == 2 && aciertos == 8){
      alert("🎉🎉FELICITACIONES PASASTE AL SIGUIENTE NIVEL  !! 🎉🎉");
      //location.reload(); // recarga la pagina.
      sonidoGanar.play();
      nivel++;
      mostrarNivel.textContent = nivel;
      intentos = 0;
      mostrarIntentos.textContent = intentos;
      aciertos = 0;
      mostrarAciertos.textContent = aciertos;
      clearInterval(tiempoTranscurrido);
      tiempo = 40;
      mostrarTiempo.textContent = tiempo;
      estoyJugando == false;
      quitarImg();
 
  }else if(nivel == 3 && aciertos == 10){
    alert("🎉🎉 FELICITACIONES GANASTE EL JUEGO  !! 🎉🎉");
    sonidoGanar.play();
    location.reload(); // recargar pag
  }
}

// funcion para mostrar  las imagens ocultas
function mostrarImagenes(){
  sonidoSeleccionar.play();
 let imgID = this.getAttribute("id");
// alert("imagen #"+imgID);
this.src = imagenNivel[imgID].url;
// guaradr los nombre de img
nombreImg.push(imagenNivel[imgID].nombre);
// guardar id imf
idImg.push(imgID);

// activar la funcion para comparar
if (nombreImg.length == 2) {
  // simular o esperar un tiempo
  setTimeout(()=>{
    compararImagenes();
  }, 100);
 
}
}

function nivel1(){
     // agregar las img al tablero
    agregarImagenes();
    mostrarNivel.textContent = nivel; 
    tiempoDeJuego(); 

}
function nivel2(){
  // agregar las img al tablero
 agregarImagenes(); 
 tiempoDeJuego(); 

}
function nivel3(){
  // agregar las img al tablero
 agregarImagenes(); 
 tiempoDeJuego(); 
}


function tiempoDeJuego(){
    // controlar el tiempo del juego
    tiempoTranscurrido = setInterval(()=>{
      tiempo--;
      mostrarTiempo.textContent = tiempo;
      if (tiempo == 10) {
          alert(" Quédan 10 segundos de tu juego 🤔 !! ");
          sonidoTiempo.play();
         //mostrarTiempo.style.color = "red"; // poner estilos directamente
         // mostrarTiempo.style.fontSize = "20px";
          mostrarTiempo.classList.add("tiempo-agotado"); // arrastra los estilos de css.
      } else if(tiempo == 0){
          alert("Perdiste, no pasas de nivel !!");
          sonidoPerder.play();
        // funcion que para la anterior.
          clearInterval(tiempoTranscurrido);
          setTimeout(()=>{
              location.reload();
          }, 3000)
         
      }
  }, 1000);
}

function quitarImg(){
  let imagenQuitar = d.querySelectorAll(".tablero div");
  imagenQuitar.forEach((img)=>{
      img.remove();
  })
}

// mostrar ventana modal -declaracion variable

function ventanaModal() {
   let mostrarModal = d.querySelector("#exampleModal");
   let cerrarModal = d.querySelectorAll(".cerrar");
   let inputJugador = d.querySelector(".nombre-jugador");
   let btnJugador = d.querySelector(".registrar-jugador");
   // botones para cerrar ventana modal
   cerrarModal.forEach((btn)=>{
        btn.addEventListener("click",()=>{
            mostrarModal.classList.remove("show"); 
            mostrarModal.style.display = "none"; 
        });
   });
   //mostrar ventana modal
   mostrarModal.classList.add("show");
   mostrarModal.style.display = "block";
   // evento click al boton del modal(registrar)
   btnJugador.addEventListener("click",()=>{
       //mostrar el nombre en el tablero 
       mostrarJugador.textContent = inputJugador.value;
       //cerrar ventana modal 
       mostrarModal.classList.remove("show"); 
       mostrarModal.style.display = "none"; 
       //iniciar juego nivel 1
       estoyJugando == true;
       nivel1();    
   });
}


