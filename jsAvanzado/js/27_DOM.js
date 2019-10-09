'use strict'

function cambiaColor(color){
	caja.style.background = color;
}

// Conseguir elementos con un ID
// var caja = document.getElementById("miCaja");
var caja = document.querySelector("#miCaja");

caja.innerHTML = "Texto en la caja desde JS";
caja.style.background="red";
caja.style.padding="20px";
caja.style.color = "white";
caja.className = "hola hola2";

// Conseguir elementos por sus etiqueta
// Conseguir elementos por su clas css
var todosLosDiv = document.getElementsByTagName('div');

/*
var contenidoEnTexto = todosLosDiv[2];
contenidoEnTexto.innerHTML = "Otro texto para el segundo elemento";
contenidoEnTexto.style.background = "red";
*/
//todosLosDiv.forEach((valor, indice) -> 

var seccion = document.querySelector("#miSeccion");

var hr = document.createElement("hr");

var valor;
for(valor in todosLosDiv){
	if(typeof todosLosDiv[valor].textContent == 'string'){
		var parrafo =  document.createElement("p");
		var texto = document.createTextNode(todosLosDiv[valor].textContent);
		parrafo.append(texto);
		seccion.append(parrafo);
	}
}
seccion.append(hr);
//});

// console.log(contenidoEnTexto);

// Seleccionar elementos por clase
var divsRojos = document.getElementsByClassName('red');
var divsAmarillos = document.getElementsByClassName('yellow');

var div;
for(div in divsRojos){
  if(divsRojos[div].className == "red"){
    divsRojos[div].style.background = "red";
  }
}

console.log(divsAmarillos);
divsAmarillos[0].style.background="yellow";

// _Usando el querySelector

var id = document.querySelector("#encabezado");
console.log(id);

var clase = document.querySelector(".red");
console.log(clase);
