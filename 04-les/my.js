var one = "Моя первая переменная";

console.log(one);

// document.getElementById('message').innerHTML = one;

$('#test').text(one);
$('#test').fadeOut("slow");

// $('.myclass').text(one);

document.getElementsByClassName("myclass")[0].innerHTML = one;
console.log(document.getElementsByClassName("myclass"));

// document.getElementsByClassName("myclass")[0].style.color = "red";

$('.myclass').css('color', 'yellow');

$('.myclass').css('background-color', 'black');

