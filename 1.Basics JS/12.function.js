//Тема: функции

var carName = 'Ford';
var carYear = 2017
var personYear = 1990;


function calculateAge(year){
    var currentYear = 2022;
    var result = currentYear - year
    return result
}
//функция может принимать определенный параметр, в зависимости от чего она будет вычитывать тот или иной возраст

function checkAngLogAge(year){
    if (calculateAge(year) < 10){
        console.log('Возраст меньше десяти лет')
    }else{
        console.log('Возраст больше десяти лет')
    }
}

checkAngLogAge(carYear);
checkAngLogAge(personYear);


