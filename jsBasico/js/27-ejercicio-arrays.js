'use strict'

/*
 * 1. Pide 6 números por pantalla y metelos en un array
 * 2. Mostrar el array entero (todos sus elementos) en el cuerpo de la página
 * 3. Ordenarlo y mostrarlo
 * 4. Invertir su orden y mostrarlo
 * 5. Mostrar cuantos elementos tiene el array
 * 6. Busqueda de un valor introducido por el usuario, que nos diga si lo
 * encuentra y su indice (Se valora el uso de funciones)
 */

// 1. Pide número y meterlos en array
var numeros = [];

for(let i = 0; i < 5 ; i++){
  numeros.push(parseInt(prompt("Introduce un número", 0)));
}

// 2. Mostrar array en cuerpo de página
document.write("<h2>Contenido de array</h2>")
numeros.forEach((numero, index) => {
  document.write("<strong>"+ numero +"</strong></br>");
});

console.log(numeros);

// 3. Array ordenado
numeros.sort();

document.write("<h2>Array ordenado</h2>");
numeros.forEach((numero, index) =>{
  document.write("<strong>"+numero+"</strong></br>");
});

// 4. Invertir orden y mostrarlo
numeros.reverse();

document.write("<h2>Array invertido</h2>");
numeros.forEach((numero, index) => {
  document.write("<strong>"+numero+"</strong></br>");
});

// 5. Cantidad de elementos del array
document.write("Cantidad de Elementos en el array: "+numeros.length+"");

// 6. Busqueda de valor en el array y su indice

var busqueda = parseInt(prompt("Busqueda de un número en el array: ", 0));

var posicion = numeros.findIndex( numero => numero == busqueda );

if(posicion && posicion != -1){
  document.write("<h2>ENCONTRADO</h2>");
  document.write("<h3>Posición de la busqueda: "+posicion+"</h3>");
}else{
  document.write("<h2>NO ENCONTRADO</h2>");
}



