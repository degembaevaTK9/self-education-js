//Тема: Больше операторов

console.log('5 % 2:', 5 % 2) // 1
console.log('8 % 3:', 8 % 3) // 2
console.log('15 % 5:', 15 % 5) //0

var i = 1;
//i = i + 1
i++; // оператор инкремент
console.log('i:', i) // 2
//i = i - 1;
i--; // оператор декремент
console.log('i:', i) // 1

// i = i + 3
i *= 3;
console.log('i:', i) // 3

i /= 1.5;
console.log('i', i) // 2


console.log('i', i++) // 2 постфиксная
//При использовании постфиксной нотации — наоборот: можно считать, что сначала происходит возврат, а потом изменение переменной.

console.log('i', ++i) // 4  префиксная
//При использовании префиксной нотации сначала происходит изменение переменной, а потом возврат.

let x = 5;

console.log('++x:',++x); // 6
console.log(x) //

//Вывели на экран ++x. Это префиксный инкремент, поэтому сначала значение переменной увеличилось на 1, потом результат вернулся и вывелся на экран.

console.log('x++', x++); //
console.log(x); // 

//Теперь выводим на экран x++. Это постфиксный инкремент, поэтому возвращено значение, содержавшееся в переменной до её увеличения на 1.