//Тема: Условные операторы

var carName = 'Ford';
var carYear = 2020;

var currentYear = 2022;
var carAge = currentYear - carYear;

// если в.м меньше 5 лет ...
// если в.м больше или равно 5 лет и меньше или равно 10 лет ...
// иначе другое сообщения

if (carAge < 5){
    console.log(carName + ': вашей машине ' + carAge + ' лет. Bronza')
} else if (carAge >= 5 && carAge <= 10){
    console.log(carName + ': вашей машине ' + carAge+ ' лет. Silver')
}else {
    console.log('Возраст '+ carName+ ': вашей машине ' + carAge + ' лет. Gold');
}

// Значение false: 0, null, undefined, пустая строка '', NaN
var empty = ''

if (NaN){
    console.log('Значение true')
} else{
    console.log('Значение false')
}