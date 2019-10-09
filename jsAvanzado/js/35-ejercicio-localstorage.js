'use strict'

let formulario = document.querySelector("#form");

formulario.addEventListener('submit', () =>{
  let titulo = document.querySelector("#addPelicula").value;
  if(titulo.length >=1){
    localStorage.setItem(titulo, titulo);
  }
});

var ul = document.querySelector("#peliculasList")

for(let i in localStorage){
  //console.log(localStorage[i]);
  if(typeof localStorage[i] == 'string'){
    var li = document.createElement("li");
    li.append(localStorage[i])
    ul.append(li);
  }
}



let formularioB = document.querySelector("#formBorrarPeliculas");

formularioB.addEventListener('submit', () =>{
  console.log("Entro a la funcion de borrado");
  let titulo = document.querySelector("#borrarPeliculas").value;
  if(titulo.length >=1){
    localStorage.removeItem(titulo);
  }
});
