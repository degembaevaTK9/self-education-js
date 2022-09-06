//Тема: Операторы сравнения

console.log('5 > 3', 5 > 3); // true
// операторы сравнения всегда возвращают нам значение true/false
console.log('3 < 2', 3 < 2) // false

console.log('8 >= 7', 8 >= 7) //true
console.log('12 <= 12', 12 <= 12)// true
console.log('12 < 12', 12 < 12)// false

console.log('4 == 4', 4 == 4)// true
console.log('4 == 5', 4 == 5)// false

console.log('4 != 4', 4 != 4)// false
console.log('4 != 5', 4 != 5)// true

console.log('4 == 4', 4 == '4')// true
//сравнивает просто значения
console.log('4 === 4', 4 === '4')// false
// сравнивает уже типы данных

// js - не строго типизированный язык