$(document).ready(function() {

	var h = +prompt("Enter any number");
	


     while (  isNaN(parseInt(h)) || h % 1 != 0) {
     	h = prompt("Please enter a valid whole number between 1 to 100 ");

     }
	for (var i = 1; i <= h; i++) {
		if (i%3 === 0  && i%5 === 0) {
			$('.list').append('<li>' + 'Fizz-Buzz'+'</li>');
		}

	 	else if (i%3 === 0) {
	 		$('.list').append("<li>" + 'fizz' + "</li>");
		}

		else if (i%5 === 0) {
			$('.list').append("<li>" +'buzz' + "</li>");
		}

		else {
			$('.list').append("<li>" + i +  "</li>");
		}

	}
});