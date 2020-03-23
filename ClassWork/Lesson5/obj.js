const user = {
  name: 'Adam',
  age: 56,
  isAdmin: false,
  dogs: null
};

console.log('-------------');

console.log('object ', user);
console.log('name ', user.name);
console.log('age ', user.age);
console.log('dogs ', user.dogs);
console.log('isAdmin ', user.isAdmin);
console.log('error ', user.error);

console.log('-------------');

user.dogs = 'Lilit';
console.log('New dogs ', user.dogs);

user.dogs = 2;
console.log('Number dogs ', user.dogs);

console.log('-------------');

// user = 2; will be error, user is const

const field = 'age';
console.log('age again', user[field]);

if ('isAdmin' in user) {
  console.log('isAdmin again ', user.isAdmin);
}

console.log('-------------');
for (key in user) {
  console.log(key, 'value', user[key]);
}

console.log('-------------');

const user2 = user;

user2.age = 11;
console.log('user1.age ', user.age);
console.log('user2.age ', user2.age);

console.log('-------------');

const user3 = { ...user };
user3.age = 33;
console.log('user1.age ', user.age);
console.log('user3.age ', user3.age);

// TASKS

// 1
// Напишите код, выполнив задание из каждого пункта отдельной строкой:

// Создайте пустой объект user.
// Добавьте свойство name со значением John.
// Добавьте свойство surname со значением Smith.
// Измените значение свойства name на Pete.
// Удалите свойство name из объекта.

// 2
// У нас есть объект, в котором хранятся зарплаты нашей команды:

// let salaries = {
//   John: 100,
//   Ann: 160,
//   Pete: 130
// }
// Напишите код для суммирования всех зарплат и сохраните результат в переменной sum. Должно получиться 390.

// Если объект salaries пуст, то результат должен быть 0.

// 3
// Создайте функцию multiplyNumeric(obj), которая умножает все числовые свойства объекта obj на 2.

// Например:

// дан объект. Нужно умножить все числовые свойства объекта на 2.
// let menu = {
//   width: 200,
//   height: 300,
//   title: "My menu"
// };

// в итоге объект должен быть таким:
// menu = {
//   width: 400,
//   height: 600,
//   title: "My menu"
// };
// P.S. Используйте typeof для проверки, что значение свойства числовое.
