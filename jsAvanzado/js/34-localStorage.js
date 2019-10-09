'use strict'

//Comprobar disponibilidad del localStorage
if(Storage !== 'undefined'){
  console.log("Compatible con localStorage");
}else{
  console.log("Compatible con localStorage");
}

// Guardar datos
localStorage.setItem("Titulo", "Curso de django");

// Recuperar un elemento
console.log(localStorage.getItem("Titulo"));
document.querySelector("#peliculas").innerHTML=localStorage.getItem("Titulo");

// Guardar objetos
let usuario = {
  nombre: "Abrahán Cortés",
  email: "f8abrahan@gmail.com",
  web: "abrahancortesweb.com"
};


localStorage.setItem("usuario", JSON.stringify(usuario));

// recuperar objeto
let userJS = JSON.parse(localStorage.getItem("usuario"));
console.log(userJS);
document.querySelector("#peliculas").append(" " + userJS.web + " " + userJS.nombre);

localStorage.removeItem("usuario");
// Elimina todos los objetos almacenado en memoria
// localStorage.clear();
