var str1 = 'Hello world';
var str2 = "Hello world 2"

var personName = 'Виктор'

var message = 'Человека зовут "' + personName +'"'; // Человека зовут "Виктор"
var message2 = "Человека зовут '" + personName +"'"; // Человека зовут 'Виктор'
var message3 = 'Человека зовут \'' + personName +'\''; // Человека зовут 'Виктор'
//экранируем кавычки, с помощью обратного слеша: \'
// но если мы хотим использовать обратный слеш в строке, то мы можем просто поставить двойной обратный слеш
var msg3 = 'Человека зовут \\ \'' + personName +'\''; // Человека зовут 'Виктор'
console.log(msg3)

//У строки есть определенные методы, 
//то есть встроенные функции непосредственно в строки, которые мы можем использовать
//помимо методов будут присутствовать еще определенные свойства

var newMessage = 'Hello world!!!'

console.log(newMessage.length) // 14 
// это свойства length, который нам вернёт количество символов в данной строке.

console.log(newMessage.toUpperCase())
// toUpperCase() - это метод(функция), так как мы его вызываем
//с помощью него мы можем все символы сделать в верхнем регистре

// тоже самое 
