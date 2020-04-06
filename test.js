// 'use strict';

// let num = [5, 4, 6, 9, 8, 1, 2, 10, 3, 7];
// num.sort(sort);
// console.log(num);

// function sort(a, b) {
//   if (a - b < 0) {
//     return -1;
//   }
//   if (a - b > 0) {
//     return 1;
//   } else {
//     return 0;
//   }
// }

// function sayHi() {
//   console.log('Привет');
// }

// // setTimeout(sayHi, 1000);

// function makeCounter() {
//   let count = 0;

//   return function() {
//     return count++; // есть доступ к внешней переменной "count"
//   };
// }

// let counter = makeCounter();
// console.log('counter', counter);
// console.log('counter', counter());
// console.log('counter', counter());
// console.log('counter', counter());

// // alert(counter()); // 0
// // alert(counter()); // 1
// // alert(counter()); // 2

const n = 2;
const m = 3;

const arr = new Array(n);

for (let i = 0; i < arr.length; i++) {
  arr[i] = new Array(m);
  for (let j = 0; j < arr[i].length; j++) {
    arr[i][j] = j;
  }
}

console.log(arr);
