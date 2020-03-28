'use strict';
function show(data) {
  console.log(data);
}

function dump(data) {
  return data;
}

show('Hello');

const world = dump('world');
console.log(world);

console.log(dump('world')); //тоже самое что строки 12-13

// вариант Хэеса
function hess(curent) {
  let steps = 0;
  let maxValue = curent;
  while (curent != 1) {
    if (curent > maxValue) maxValue = curent;
    if (isEven) {
      const oldVal = curent;
      curent = curent / 2;
      console.log(`step ${steps + 1}: ${oldVal}/2 = ${curent}`);
    } else {
      const oldVal = curent;
      curent = curent * 3 + 1;
      console.log(`step ${steps + 1}: ${oldVal}*3 + 1 = ${curent}`);
    }
    steps++;
  }
  console.log('maxValue', maxValue);
  console.log('steps', steps);
}

function isEven(number) {
  return number % 2 === 0;
}

// вариант Хэеса 2
function getHassSequence(num) {
  const hassSequence = [];
  while (num > 1) {
    hassSequence.push(num);
    if (isEven(num)) {
      num = num / 2;
    } else {
      num = num * 3 + 1;
    }
  }

  return hassSequence;
}

function showHassSequence(num) {
  const sequence = getHassSequence(num);
  console.log('Sequence', sequence);
  console.log('Max Value:', Math.max(...sequence)); // тут используется деструктуризация массива, мы её ещё не проходили
  console.log('Steps:', sequence.length);
}

showHassSequence(9);
