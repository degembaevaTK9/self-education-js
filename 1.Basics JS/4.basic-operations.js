//Тема: базовые операторы

var num1 = 12;
var num2 = 8;

num1 =2;

console.log('+:', num1+num2); //+: 10
console.log('-:', num1-num2); //-: -6
console.log('*:', num1*num2);//' *: 16
console.log('/:', num1/num2);//: 0.25

var str1 = 'Hello';
var str2 = 'World';

console.log('конкатенация +:', str1+ ' '+str2); // конкатенация +: Hello World

console.log('1 + 2:', 1 + '2'); //1 + 2: 12
console.log('str1 + num1: ', str1+num1); //str1 + num1:  Hello2

console.log('Boolean + string:', true + str2)//Boolean + string trueWorld

console.log('true + 1:', true + 1) // 2
console.log('false + 1:', false + 1)//1

console.log(+true); //1
console.log(+false); //0