var array = ['Яблоко', 'Груша', 'Банан', 'Апельсин', 'Арбуз'];
var anchor = 0;

var say = function(){
    
    $('#result').html('');
    
    if(anchor === 0) {
        array.reverse();
    } else {
        anchor = 1;
        array.sort();
    }

    for(var i = 0; i < array.length; i++) {
	    $('#result').append('<p>'+array[i]+'</p>');
    }
    
}

test.addEventListener('mouseover', say);