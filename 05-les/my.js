	var one = "Моя первая переменная!";
	//alert(one);
	console.log(one);

	one = one.toUpperCase();

	//document.getElementById("test").innerHTML = one;
	$('#test').text(one);
	$('#test').fadeOut("slow");

	//$('.myclass').text(one);

	document.getElementsByClassName("myclass")[0].innerHTML = one;
	console.log(document.getElementsByClassName("myclass"));

	//document.getElementsByClassName("myclass")[0].style.color = "red";
	$('.myclass').css('color', 'green');

	$('.myclass').css('background-color', 'black');

	// Задать Background-color цветом gray на javascript
	//document.getElementsByClassName("myclass")[0].style.backgroundColor = "gray";

	function mySum(a, b) {
		return a + b;
	}

	console.log(mySum(3,6));

/*	function mySumShow(a,b) {
		result = a + b;
		document.getElementsByClassName("myclass")[0].innerHTML = result;
	}

	mySumShow(5, 6);*/

	function mySumShow(a,b) {
		document.getElementsByClassName("myclass")[0].innerHTML = mySum(a, b);
	}

	mySumShow(15, 3);
