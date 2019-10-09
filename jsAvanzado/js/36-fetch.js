'use strict';

//Fetch(ajax) y peticiones a servicios / apes rest

var div_usuarios = document.querySelector("#usuarios");
var div_alumno = document.querySelector("#alumno");
var div_janet = document.querySelector("#janet");

getUsers()
.then(data => data.json())
.then(users => {
  listadoUsuarios(users.data);
  return getInfo();
})
.then(data => {
  div_alumno.innerHTML = data;
  return getJanet();
})
.then(data => data.json())
  .then(janet => {
    mostrarJanet(janet.data);
  })
  .catch(error => {
    console.log(error);
  });

function getUsers(){
return fetch('https://reqres.in/api/users');
}

function getJanet(){
return fetch('https://reqres.in/api/users/2');
}

function getInfo(){
  var alumno = {
    nombre: "Abrahán",
    apellidos: "Cortés",
    url: "abrahancortesweb"
  };
  return new Promise((resolve, reject) => {
    var alumno_string = "";
    setTimeout(() => {
      alumno_string = JSON.stringify(alumno);
      if(typeof alumno_string != 'string' || alumno_string == '') return reject('Error!');   
    return resolve(alumno_string);
    }, 3000);
  });
}

function listadoUsuarios(usuarios){
usuarios.map((user, i) => {
  let nombre = document.createElement("h3");
  nombre.innerHTML = i + " " + user.first_name + " " + user.last_name;
  div_usuarios.appendChild(nombre);
  document.querySelector(".loading").style.display = 'none';
});
}

function mostrarJanet(user){
  let nombre = document.createElement("h4");
  let avatar = document.createElement("img");
  nombre.innerHTML = user.first_name + " " + user.last_name;
  avatar.src = user.avatar;
  avatar.width = "100";
  div_janet.appendChild(nombre);
  div_janet.appendChild(avatar);
  document.querySelector("#janet .loading").style.display = 'none';
}
