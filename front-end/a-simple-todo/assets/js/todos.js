$('ul').on("click", "li", function() {
  $(this).toggleClass("complete");
})

$('ul').on("click", ".delete", function(event) {
  $(this).parent().fadeOut(600, function() {
    $(this).remove();
  })
  event.stopPropagation();
})

$('#addItem').on("keypress", function(event) {
  if (event.which === 13) {
    var todoText = $(this).val();
    $(this).val("");
    $('ul').append("<li><span class='delete'><i class='fa fa-trash'></i></span>" + todoText + "</li>");
  }
})

$(".fa-plus-circle").on("click", function() {
  $("#addItem").fadeToggle();
})
