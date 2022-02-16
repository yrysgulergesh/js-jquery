var movie = "Fight Club";
var description = "Терзаемый хронической бессонницей и отчаянно пытающийся вырваться из мучительно скучной жизни, клерк встречает некоего Тайлера Дардена, харизматического торговца мылом с извращенной философией."

document.getElementById("movie").innerHTML = movie;
document.getElementById("description").innerHTML = description;

/* 
    Ниже этого комментария таким образом, с помощью функции fadeOut, чтобы название фильма
    и описание фильма плавно исчезали при обновлении страницы в виртуальном браузере
*/
$('#description').fadeOut('slow'); 
$('#movie').fadeOut('slow'); 