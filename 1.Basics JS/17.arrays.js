//Тема: Массивы

//массивы это по сути объекты в js, 
//которые содержат в себе n-ное количество других элементов;
// в массивах мы можем хранить любые данные(числа, строки, объкты и тд.)
// но там очень важен порядок

var cars = ['Ford','Mazda','Kia','BMV'];

console.log(typeof cars) //object

//мы можем получать доступ к каждому элементу массива
console.log(cars[1]); //Mazda

//методы массивов:

//мы можем узнать длину массива, 
//количество элементов которые содержаться в самом массиве
console.log(cars.length) // 4

//мы можем добавить новый элемент в конец массива
cars.push('Audi')
console.log(cars)//[ 'Ford', 'Mazda', 'Kia', 'BMV', 'Audi' ]

//мы можем удалять последний элемент из данного массива
var audi = cars.pop()
console.log(cars)// [ 'Ford', 'Mazda', 'Kia', 'BMV' ]
//и также мотод pop() возвращает нам тот элемент который удаляет
console.log(cars, audi) // [ 'Ford', 'Mazda', 'Kia', 'BMV' ] Audi

//удаляет и возвращает первый элемент массива
var ford = cars.shift()
console.log(cars, ford); // [ 'Mazda', 'Kia', 'BMV' ] Ford

// добавляет элемент в начало массива
cars.unshift(audi);
console.log(cars) // [ 'Audi', 'Mazda', 'Kia', 'BMV' ]

//этот метод позволяет нам находить опеределенный элемент в массиве
console.log(cars.indexOf('kia'))// -1(не нашли элемент)
console.log(cars.indexOf('Kia')) // 2 (таким образом мы можем получить индекс элемента)
// результатом метода indexOf будет индекс элемента которого указали
var index = (cars.indexOf('Kia'))
var kia = cars[index] // cars[2]
console.log(kia) // Kia







