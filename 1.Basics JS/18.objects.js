//Тема: Объекты

//при создании объектов в js, нам порядок не важен
// внутри {} пишем, вначале мы пишем ключ какого-то значения и после : пишем его значения

var person = {
    name : 'Alex',
    year: 1998,
    family: ['Anna', 'Jony'],
    car: {
        year: 2010,
        model: 'Ford'
    },
    //1
    // calculateAge : function(year){
    //     var age = 2022 - person.year
    //     console.log('Возраст: '+age) 
    // }

    //2
    // calculateAge : function(){
    //     var age = 2022 - this.year
    //     console.log('Возраст: '+age) 
    // }

    //3
    calculateAge : function(){
        this.age = 2022 - this.year
    }

    

};

//Если данная функция находиться внутри объекта, 
//то чтобы получить достпуп до определенного элемента 
//мы можем с помощью спец. слово this
// то есть this условно равно объекту person

console.log(person);
// как получить доступ до определенных элементов объектов
//1-способ
console.log(person.name) //Taazim
//2-способ
console.log(person['year']) // 1998
//3-способ
var field = 'car'
console.log(person[field].year) //2010

//мы можем изменять опеределенные поля в объекте
person.year = 1995;
console.log(person) 

// у объектов также есть методы объектов, 
//которые мы можем создавать с помощью функции 
//и вызывать этот метод
person.calculateAge() //Возраст: 27
console.log(person) 

