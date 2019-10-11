$(document).ready(() => {
  // Selector de id
  $("#red").css("background", "red")
                      .css("color", "white");

  $("#yellow").css("background", "yellow")
                             .css("color", "green");

  $("#green").css("background", "green")
                             .css("color", "white");

  // Selectores de clases
  let mi_clase = $('.zebra').css("padding", "5px");

  $('.sinBorde').click(function(){
    $(this).addClass('zebra');
  });

  // Selectores de etiqueta
  let parrafo = $('p').css("cursor", "pointer");
  parrafo.click(function(){
    let that = $(this);
    if(!that.hasClass('grande')){
      that.addClass('grande');
    } else{
      that.removeClass('grande');
    }

  });


  // Selectores de atributos
  $('[title="Google"]').css("background", "#ccc");
  $('[title="Facebook"]').css("background", "blue");

  // Otros
  $('p, a').addClass('margen-superior');

  let busqueda = $("#caja").find('.resaltado').parent().find('[title="Google"]');
  console.log(busqueda);

});
