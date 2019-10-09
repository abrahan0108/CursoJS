'use strict';


let fecha = new Date();
let year = fecha.getFullYear();
let month = fecha.getMonth();
let day = fecha.getDay();

let textoFecha = `
  El año es: ${year}
  El mes es: ${month}
  El dia es: ${day}
`; 
console.log(textoFecha);
