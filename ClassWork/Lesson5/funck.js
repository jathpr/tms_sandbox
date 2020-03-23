hello();

function hello() {
  console.log('Hello');
}

hello();

function hello2(name) {
  console.log('Hello', name);
}

hello2('Friend');
hello2();

const helloArrow = () => console.log('Hello');
helloArrow();

const hello2Arrow = name => console.log('Hello', name);
hello2Arrow('Enemy');

const hello3Arrow = (name, surname) => console.log('Hello', name, surname);
hello3Arrow('Your', 'Enemy');

function sum(a, b) {
  return a + b;
}

const sumOf2 = sum(2, 3);
console.log('sumOf2', sumOf2);
const helloVal = hello();
console.log('helloVal', helloVal);
