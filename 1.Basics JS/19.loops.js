//Тема: Циклы

var numbers = [1,2,3,4,5]
numbers.push(8)

//мы должны вывести каждый элемент массива
// console.log(numbers[0]);
//но так не очень удобно, если предположить что в массиве 100 элементов.
// так нам придется все писать вручную

// цикл for
for (var i = 0; i < numbers.length; i++){
    console.log(numbers[i])
}
// i ++ => i = 1; 1< 5 и тд.

// мы хотим чтобы теперь выводились четные элементы
// 1 -способ
for (var i = 0; i < numbers.length; i++){
    if( numbers[i] % 2 === 0){
        console.log(numbers[i])
    }}

// 2-способ, оператор continue

for (var i = 0; i < numbers.length; i++){
    if( numbers[i] % 2 !== 0){
        continue
    }
    console.log(numbers[i])
}
// оператор continue - который говорит что нам нужно пропустить текущий элемент,
// если он является у нас нечётным

numbers.push('Not a Number!')

// 3-способ, оператор break
for (var i = 0; i < numbers.length; i++){
    if( typeof numbers[i] === 'string'){
        break
    }
    console.log(numbers[i])
}
// break - это оператор который позволяет нам выходить из цикла





