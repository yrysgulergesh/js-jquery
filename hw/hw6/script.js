var arrayString = ['Первый', 'Второй', 'Третий', 'Четвертый', 'Пятый'];

/*
*   Функция reverse() "переворачивает" массив arrayString.
*/
arrayString = arrayString.reverse();

/*
*   Выводим в цикле все элементы массива arrayString
*   Обратите внимание на метод jQuery append. В отличии от метода text,
*   данный метод добавляет в HTML новые значения, а старые не удаляет. 
*  
*   Задание: Примените функцию toUpperCase() в цикле ниже, чтобы все
*   элементы массива стали в верхнем регистре
*/
for(var i = 0; i < arrayString.length; i++) {
    $('#result').append(arrayString[i].toUpperCase() + '<br>');
}