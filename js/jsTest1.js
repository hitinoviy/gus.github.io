// let age = prompt('Сколько тебе лет?', '');

// if(age == null || age == ''){
//     alert('ОЙ все!');
// }else{
//     alert(`Тебе ${age} лет!`);}

// let isBoss = confirm("Ты здесь главный?");

// alert( isBoss );
// let apples = "2";
// let oranges = "3";
// оба операнда предварительно преобразованы в числа
// alert( +apples + +oranges );
// alert( apples + oranges );
// let age = prompt('Возраст?', 18);

// let message = (age < 3) ? 'Здравствуй, малыш!' :
//   (age < 18) ? 'Привет!' :
//   (age < 100) ? 'Здравствуйте!' :
//   'Какой необычный возраст!';

// alert( message );

// Одно и тоже  

// if (age < 3) {
//     message = 'Здравствуй, малыш!';
//   } else if (age < 18) {
//     message = 'Привет!';
//   } else if (age < 100) {
//     message = 'Здравствуйте!';
//   } else {
//     message = 'Какой необычный возраст!';
//   }
$(document).ready(function(){
    $('.slider').slick({
        dots: true,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        autoplay: true,
        autoplayTime: 1000
    });
  });