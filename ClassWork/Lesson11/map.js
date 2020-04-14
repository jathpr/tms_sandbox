const arr = [0, 1, 5];

// реализация циклом
const forArr = new Array(arr.length);
for (let index = 0; index < arr.length; index++) {
  const element = arr[index];
  forArr[index] = addOne(element, index, arr);
}
// реализация циклом

console.log('forArr', forArr);

function addOne(el, index, array) {
  return el + 1;
}

// реализация мапом
const newArr = arr.map(addOne);
// реализация мапом

console.log('newArr', newArr); //newArr === [1,6,5]
