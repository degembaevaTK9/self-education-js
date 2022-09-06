//Тема: Тернарные операторы

if (4){
    console.log('Значение true')
} else{
    console.log('Значение false')
}

4 ? console.log('Значение true') : console.log('Значение false');

!((true || false) || !false) 
    ? console.log('Значение true') 
    : console.log('Значение false'); //false

var personAge = 15
// var message;

// if(personAge < 18){
//     message = 'Человек еще не совершеннолетний!'
// }else{
//     message = 'Человек совершеннолетний!'
// }

var message = personAge < 18
    ? 'Человек еще не совершеннолетний!' 
    : 'Человек совершеннолетний!'

console.log(message)