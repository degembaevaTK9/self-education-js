//Тема: Числа

console.log(42)
console.log(-23) // отрицательные числа
console.log(1.5) // дробные числа
console.log(-8 / 3) // -2.666
console.log(0xAB) //16-система числения. 171
console.log(2e3)// 2000, мы берем 2 как основания, (е)10 ужножаем 3 раза

// специальные значения чисел
console.log(NaN) // not a number
console.log(typeof NaN) // number
// если мы сделаем неправильную какую-то операцию
console.log(2 * 'hi'); // NaN

//спец значения которые говорят что это бесконечность
console.log(123 / 0 ) // Infinity
console.log(typeof Infinity) // number

// Методы чисел

var fortyTwo = 42;
var delta = 8 / 3; 

console.log(fortyTwo.toString()) // мы можем привести число к строке

console.log(delta.toFixed(2)) // 2.67 (строка)
// параметром мы передаем количество цифр который нам неоюходимо учесть после запятой
// если мы применим метод toFixed, то сейчас вместо числа у нас появилось строка

// чтобы перевести данную строку в число, для этого существует несколько способов:
// самый простой 1- способ, это просто поставить плюс перед переменной
console.log(+delta.toFixed(2)+ 4) // 6.67 (число)

// 2- способ, функция parseFloat()
console.log(parseFloat(delta.toFixed(2)))  //2.67
// парсит число и выдает нам результат с учетом десятичных каких-то его частей,
console.log(parseInt(delta.toFixed(2))) //2
// работает только с целыми числами

// вспомогательные методы

//с помощью isNaN - мы можем проверять валидное это число или нет, 
// то есть правильное ли оно м можно ли с ней работать
console.log(isNaN(NaN)) // true
console.log(isNaN(45)) // false
console.log(isNaN('hi')) // true

// спец метод для бесконечности

console.log(isFinite(1 / 0))// false
// является ли конечным результатом данное число
console.log(isFinite(99999999))// true







