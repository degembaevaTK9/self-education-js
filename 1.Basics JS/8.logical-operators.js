//Тема: Логические операторы

/*
    &&    |  true  | false
    true  |  true  | false
    false |  false | false

    ||    |  true  | false
    true  |  true  | true
    false |  true | false

    && (и) - true если все значения true
    || (или) - true если хоть одна значение true
    -!(нет) - инвентирует true или false
*/

console.log(true && true) // true
console.log(true && false)// false

console.log(true || false) // true 
console.log(false || false) // false

console.log(!true) // false
console.log(!!false) // false
console.log(!!!false) // true

console.log((false && true) || (true || false) || !true) // true
//               false     true     true      true  false