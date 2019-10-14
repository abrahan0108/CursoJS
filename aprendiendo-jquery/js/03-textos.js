$(document).ready(function(){

  reloadLink();
  $('#add_button')
    .removeAttr('disabled')
    .click(function(){
    $('#menu').append('<li><a href="'+$('#add_link').val()+'"></a></li>');
    $("#add_link").val('');
    reloadLink();
  });
  
});

function reloadLink(){

  $('a').each(function(index){
    let that = $(this); 
    let link = that.attr("href");

    that.attr('target', '_blank');

    that.text(link);

  });

}
