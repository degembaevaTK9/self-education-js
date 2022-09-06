//Тема: оператор switch case

var carColor =  'red';

// if (carColor === 'green'){
//     console.log('Цвет машины зеленый')
// } else if(carColor === 'yellow'){
//     console.log('Цвет машины жёлтый')
// } else if (carColor === 'red'){
//     console.log('Цвет машины красный')
// } else{
//     console.log('Цвет машины не определен')
// }

switch (carColor){
    case 'green':
        console.log('Цвет машины зеленый');
        break;
    case 'yellow': 
        console.log('Цвет машины жёлтый');
        break;
    case 'red':
        console.log('Цвет машины красный');
        break;
    default:
        console.log('Цвет машины не определен');

}

// для того чтобы дальше эти условия не выполнялись, 
//нам необходимо выйти из данного условия.
// для этого в конце кажого блока мы прописываем оператор break