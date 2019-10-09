'use strict'

window.addEventListener('load', () => {

  let pelicula = {
    title: "Santa Sangre",
    year: 1997,
    country: "México"
  };

  let peliculas = [
    {title: "it", year:"2019", country:"USA"},
    pelicula
  ];

  //console.log(peliculas);
  for(let index in peliculas){
    let cajaPeliculas = document.querySelector("#peliculas");
    let p = document.createElement("p");
    p.append(peliculas[index].title + " - " + peliculas[index].year);
    cajaPeliculas.append(p);
  }
});
