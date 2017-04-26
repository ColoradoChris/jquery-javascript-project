var num = 40;

function createBoard(number) {
	var squareSize = 600/num;
	for (var i = 1; i <= number; i ++) {
		$('#board').append('<tr>');
	}
	for (var j = 1; j <= number; j++) {
		$('tr').append("<td><div class='square'></div></td>");
	}
	$('.square').css({'width': squareSize, 'height': squareSize });

}

function draw(){
  $('.square').hover(function (){
    $(this).css("background", "white");
  });
}

function reset(){
  num = prompt("How many boxes would you like? (1-100)");
  num = parseInt(num);
	while (isNaN(num) || num < 1 || num > 100) {
		num = prompt('Please type a valid number between 1 and 100.');
		num = parseInt(num);
	}
  $("tr").remove();
  createBoard(num);
  draw();
}

$(document).ready(function(){
  createBoard(num);
  draw();

  $("#reset").click(function(){
    reset();
  });
});
