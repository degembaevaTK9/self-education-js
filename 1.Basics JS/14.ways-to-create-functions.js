//Тема: способы создания функций

// 1-способ
function sayHelloTo(name){
    console.log('Hello,' + name)
}

sayHelloTo('Taazim')

// 2 - способ

var sayHelloTo = function (name){
    console.log('Hello, ' + name)
}

sayHelloTo('Alex')
//функция в данном случае является анонимной
//результат работы оператора function будет перемещен в переменную sayHelloTo
// и теперь переменная sayHelloTo у нас также будет являться переменной

//отличие этих двух способов:

//в 2-способе
// sayHi('Maria')

// var sayHi = function (name){
//     console.log('Hello, ' + name)
// }
//если вызов функции sayHelloTo  сделаем до объявления функции 
// будет ошибка, и  нам говорят что sayHelloTo не является функцией
// ведь на текущем этапе данная переменная sayHelloTo не доступна

//в 1-способе
saySalam('Aisha')

function saySalam(name){
    console.log('Hello, ' + name)
}
// все работает, хотя мы сначала вызываем функцию и только потом его создаем
// это и есть ключевое отличие двух способов
// если мы задаем функцию и не складываем его в переменную var, 
// то данная функция будет доступна по всему файлу
// мы можем вызывать функцию до того как она была объявлена
// потому что интерпретатор js работает слудующим образом:
// он сначало просматривает весь файл, и ищет подобные функции, которые заданы 1-способом,
// и если он что-то подобное находит то он уже его имеет в ввиду
// когда вызывается данная функция то он уже знает куда ему обратиться