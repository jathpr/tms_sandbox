let fruits = ['Яблоко', 'Апельсин', 'Слива'];
console.log('fruits', fruits);
console.log('fruits 3', fruits[3]);
console.log('fruits 0', fruits[0]);

fruits[0] = 'Груша';
console.log('fruits 0', fruits[0]);
console.log('fruits length', fruits.length);

fruits[3] = 'Лимон'; // danger
console.log('fruits', fruits);

fruits[6] = 'Лимон'; // bad exp
console.log('fruits', fruits);
console.log('fruits length', fruits.length);

for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}

for (let fruit of fruits) {
  console.log(fruit);
}

let matrix = [
  [1, 2, 3],
  [4, 5, 6],
  [7, 8, 9]
];

console.log(matrix[1][1]);

// создайте массив с цифрами
// выведите те строки где цифры больше 7

// создайте массив объектов с ключами строками и значениями цифрами
// выведите те строки где цифры больше 7

//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

const months = [{ jan: 10 }, { feb: 4 }];

for (let month of months) {
  for (name in month) {
    if (month[name] > 7) console.log(name);
  }
}
