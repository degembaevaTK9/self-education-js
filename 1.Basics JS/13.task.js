// Перепишите функцию checkAngLogAge таким образом, чтобы:

// 1. В консоли можно было определить, что это за объект(человек или машина)
// 2. Мы могли сами определять с каким возрастом сравнивать 
//(не только 10 лет, но и любой другой возраст),
// причем это должно быть отображено в консоли

var carName = 'Ford';
var carYear = 2017
var personYear = 1990;
var person = 'Anna';

function calculateAge(year){
    var currentYear = 2022;
    var result = currentYear - year
    return result
}
//функция может принимать определенный параметр, 
//в зависимости от чего она будет вычитывать тот или иной возраст

function checkAngLogAge(year,name, compareTo){
    if (calculateAge(year) < compareTo){
        console.log('Возраст '+ name +' меньше '+ compareTo + ' лет')
    }else{
        console.log('Возраст '+ name +' больше '+ compareTo + ' лет')
    }
}

checkAngLogAge(carYear,'машины', 15);
checkAngLogAge(personYear,'человека', 5);




