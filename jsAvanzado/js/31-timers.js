'use strict'

window.addEventListener('load', () =>{
  // setInterval se ejecuta cada cierto tiempo REPETIDAMENTE
 function intervalo(){ 
    let timer = setInterval(() =>{ 
     // console.log("Timer a cada 4 segundos"); 
      var header = document.querySelector("h1"); 
      if(header.style.fontSize == "50px"){
        header.style.fontSize = "20px";
      }else{
        header.style.fontSize = "50px";
      }
    }, 1000);

    let stop = document.querySelector("#stop");
    stop.addEventListener("click", () =>{
      alert("Has parado el timer");
      clearInterval(timer);
    });
   return timer;
  }

  let timer = intervalo();

  let stop = document.querySelector("#stop");
  stop.addEventListener("click", () =>{
    alert("Has parado el timer");
    clearInterval(timer);
  });

  let start = document.querySelector("#start");
  start.addEventListener("click", () =>{
    alert("Has empezado el timer");
    intervalo();
  });
  
  
  //setTimeout se ejecuta un bloque de instrucciones UNA SOLA VEZ
  /*
  let timer = setTimeout(() =>{
    let header = document.querySelector("h1");
    if(header.style.fontSize == "50px"){
      header.style.fontSize = "20px";
    }else{
      header.style.fontSize = "50px";
    }
  }, 3000);
  */
});
