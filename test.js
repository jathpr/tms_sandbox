const arr = [0, 1, 5];

// arr.forEach((el) => console.log(el));

// for (let index = 0; index < arr.length; index++) {
//   const element = arr[index];
//   if (index !== arr.length - 1) {
//     forArr[index] = element + arr[index + 1];
//   } else {
//     forArr[index] = element;
//   }
// }

const forArr = new Array(arr.length);
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  forArr[index] = addOne(element, index, arr);
}

console.log('forArr', forArr);

function addOne(el, index, array) {
  console.log('------------');
  console.log('addOne -> array', array);
  console.log('addOne -> index', index);
  console.log('addOne -> el', el);
  console.log('------------');
  return el + 1;
}

const newArr = arr.map(addOne);

// // function addOne(el) {
// //   return el + 1;
// // }

console.log('newArr', newArr); //newArr === [1,6,5]

// const sum = arr.reduce((pv, cv) => pv + cv, 0);
// console.log('sum', sum);

// const obj = arr.reduce((pv, cv, index) => ({ ...pv, [index]: cv }), {});
// console.log('obj', obj);

// // написать функцию которая перемножает все отрицательные значения в массиве используя reduce
