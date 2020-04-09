// 'use strict';

// const user = {
//   name: 'Me',
//   say() {
//     return this.name;
//   },
// };
// console.log('user', user.toString());
// console.log('user', '' + user);

// user.toString = function () {
//   return `{name: "${this.name}"}`;
// };
// console.log('user', user.toString());
// console.log('user', '' + user);

// let user = new User('Вася');

// console.log(user.name); // Вася
// console.log(user.isAdmin); // false

// const u2 = User('fds');
// console.log('u2', u2);

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

// const Shapes = {
//   circle: 'Circle',
//   square: 'Square',
// };

// function Shape(type, name) {
//   this.name = name;
//   this.type = type;
//   this.sq = function () {
//     return this.calcSq();
//   };
// }

// function Сircle(name, d) {
//   const circle = new Shape(Shapes.circle, name);
//   circle.d = d;
//   circle.calcSq = function () {
//     return (this.d / 2) ** 2 * Math.PI;
//   };
//   Object.defineProperty(circle, 'square', {
//     get: function () {
//       return this.calcSq();
//     },
//     enumerable: true,
//   });
//   return circle;
// }

// function Square(name, side) {
//   const shape = new Shape(Shapes.square, name);
//   for (const key in shape) {
//     this[key] = shape[key];
//   }
//   this.side = side;
//   this.calcSq = function () {
//     return this.side ** 2;
//   };
//   Object.defineProperty(this, 'square', {
//     get: () => {
//       return this.calcSq();
//     },
//     enumerable: true,
//   });
// }

// const showShape = (shape) => {
//   console.log('--------------------');
//   console.log('showShape -> name', shape.name);
//   console.log('showShape -> type', shape.type);
//   console.log('showShape -> square', shape.square);
//   switch (shape.type) {
//     case Shapes.circle:
//       console.log('showShape -> diameter', shape.d);
//       break;
//     case Shapes.square:
//       console.log('showShape -> side', shape.side);
//       break;

//     default:
//       break;
//   }
// };

// showShape(new Сircle('one', 3));
// showShape(new Square('two', 3));

// const obj1 = { a: 1 };
// const obj2 = new Object({ a: 1 });
// console.log('obj1', obj1);
// console.log('obj2', obj2);

class Clock {
  constructor({ template }) {
    this.template = template;
  }

  start() {
    this.render();
    this.timer = setInterval(() => this.render(), 1000);
  }

  stop() {
    clearInterval(this.timer);
  }

  render() {
    let date = new Date();

    let hours = date.getHours();
    if (hours < 10) hours = '0' + hours;

    let mins = date.getMinutes();
    if (mins < 10) mins = '0' + mins;

    let secs = date.getSeconds();
    if (secs < 10) secs = '0' + secs;

    let output = this.template.replace('h', hours).replace('m', mins).replace('s', secs);

    console.log(output);
  }
}

let clock = new Clock({ template: 'h:m:s' });
clock.start();
