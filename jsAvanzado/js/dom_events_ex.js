'use stric'

window.addEventListener('load', () => {
  console.log("DOM cargado");
  
  let form = document.querySelector("#form");
  let box_dashed = document.querySelector(".dashed");

  box_dashed.style.display = "none";

  form.addEventListener('submit', () => {
    console.log("Evento capturado");
    let nombre = document.querySelector("#name").value;
    let apellido = document.querySelector("#l_name").value;
    let edad = parseInt(document.querySelector("#age").value);

    if(nombre.trim() == null || nombre.trim().length == 0){
      //alert("El nombre no es valido");
      document.querySelector("#err_nombre").innerHTML = "El nombre no es válido"
      return false;
    } else{
      document.querySelector("#err_nombre").style.display = "none";
    } 

    if(apellido.trim() == null || apellido.trim().length == 0){
      // alert("Los apellidos no son validos");
      document.querySelector("#err_apellidos").innerHTML = "Los apellidos no son válidos"
      return false;
    } else{
        document.querySelector("#err_apellidos").style.display = "none";
    } 

    if(edad == null || edad <= 0 || isNaN(edad)){
      // alert("La edad no es valida");
      document.querySelector("#err_edad").innerHTML = "La edad no es válida"
      return false;
    } else{
        document.querySelector("#err_edad").style.display = "none";
    }

    box_dashed.style.display = "block";

    let p_nombre = document.querySelector("#p_nombre span");
    let p_apellidos = document.querySelector("#p_apellidos span");
    let p_edad = document.querySelector("#p_edad span");

    p_nombre.innerHTML = nombre;
    p_apellidos.innerHTML = apellido;
    p_edad.innerHTML = edad;

    /*
    let datos_usuario = [nombre, apellido, edad];

    for(let indice in datos_usuario){
      let parrafo = document.createElement("p");
      parrafo.append(datos_usuario[indice]);
      box_dashed.append(parrafo);
    }
    */
  });
});
