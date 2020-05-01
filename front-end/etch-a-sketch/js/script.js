user_input = 12;

$(document).ready(function() {

makeboard();
draw();

$("#reset").on("click", function() {
  $(".row").removeClass("draw");
});

$("#newBoard").on("click", function() {
  user_input = prompt("Please enter the new width (between 10-40)");
  makeboard();
});

});

function makeboard() {
  $("#container").html("");
  for (y = 0; y < user_input; y++) {
    for( x = 0; x < user_input; x++) {
      $("#container").width("960px");
    var new_width = $("#container").width() / (x*2);
    $("<div class='row'></div>").appendTo("#container");
  }
  $("<div class='clear'></div>").appendTo("#container");
}
$(".row").width(new_width);
$(".row").height(new_width);
$("#container").width( user_input * new_width + (user_input*2+1));
draw();
};

function draw() {
  $(".row").on("mouseenter", function() {
    $(this).addClass("draw");
  });
};
