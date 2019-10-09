'use strict'

// Eventos de mouse
// var boton = document.querySelector("#boton");

function cambiaColor(){
  let bgc = boton.style.background;
  if(bgc == "green"){
    boton.style.background = "red";
  } else {
    boton.style.background = "green";
  }
  return true;
}
// desde el elemento JS
var boton = document.querySelector("#boton");
boton.addEventListener('click', () =>{cambiaColor()});

// mouseOver

boton.addEventListener('mouseover', () => {
  boton.style.background = "#ccc";
});

// mouseout
boton.addEventListener('mouseout', () => {
  boton.style.background = "black";
});

/*
 * Eventos de teclado
 */

// focus 
var input = document.querySelector("#campo_nombre");
input.addEventListener('focus', () => {
  console.log("Estas dentro del input");
});

// blur
input.addEventListener('blur', () => {
  console.log("Estas fuera del input");
});
// keydown
input.addEventListener('keydown', (event) => {
  console.log("Pulsando esta tecla: ", String.fromCharCode(event.keyCode));
});
// keypress
input.addEventListener('keypress', (event) => {
  console.log("Tecla Presionada: ", String.fromCharCode(event.keyCode));
});
// keyup
input.addEventListener('keyup', (event) => {
  console.log("Tecla Soltada: ", String.fromCharCode(event.keyCode));
});

