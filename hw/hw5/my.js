var arrayNum = [1, 2, 3, 4, 5];

var arrayString = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];

var arrayJson = {
        'menu': {
            'first': 'Первое блюдо',
            'second': 'Второе блюдо'
        } 
    }


$('#result1').text('Вывод первого элемента массива arrayNum: ' + arrayNum[0]);
$('#result2').text('Вывод второго элемента массива arrayString: ' + arrayString[1]);
$('#result3').text('Вывод первого элемента массива arrayJson: ' + arrayJson['menu']['first']);