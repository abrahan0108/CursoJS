$(document).ready(function(){
  //Eventos mousehover y mouseout
  var caja = $("#caja");
  /*
  caja.mouseover(function(){
    $(this).css("background", "red");
  });
  caja.mouseout(function(){
    $(this).css("background", "green");
  });
  */

  // Hover
  function cambiaRojo(){
    $(this).css("background", "red");
  }

  function cambiaVerde(){
    $(this).css("background", "green");
  }

  caja.hover(cambiaRojo, cambiaVerde);

  // Evento click
  caja.click(function(){
    $(this).css("background", "blue")
           .css("color", "white");
  });

  caja.dblclick(function(){
    $(this).css("background", "pink")
           .css("color", "yellow");
  });

  // Eventos Focus y blur
  let that = $("#nombre");
  let datos = $("#datos");

  that.focus(function(){
    $(this).css("border","2px solid green");
  });

  that.blur(function(){
    $(this).css("border","1px solid #ccc");
    $(this).val();
    datos.text($(this).val()).show();
  });

  // Mousedown y Mouseup
  datos.mousedown(function(){
    $(this).css("border-color", "gray");
  });

  datos.mouseup(function(){
    $(this).css("border-color", "black");
  });

  // Evento Mousemove
  $(document).mousemove(function(){
    let sigueme = $("#sigueme");
    $('body').css("cursor", "none");
    console.log("Coordenada en X: "+event.clientX);
    console.log("Coordenada en Y: "+event.clientY);
    sigueme.css("left", event.clientX).css("top", event.clientY);
  });

});
