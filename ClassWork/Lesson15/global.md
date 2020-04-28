1. Есть некоторая строка (var str = 'fgfggg';), что будет, если мы возьмем str[0]?
2. Почему плохо писать прямо в прототипы базовых типов?
3. Почему 0.1 + 0.2 даст 0.30000000000000004
4. Объяснить в какой последовательности выведутся цифры и почему так.

```
console.log(1);
setTimeout(function() {
	console.log(2);
}, 0)
console.log(3);
```

5. Как подключить js, css? Плюсы, минусы разных способов?

6. Чем opacity отличается от visible: hidden и что это такое, отличие от overflow: hidden?
7. Что выведет код

```
var i = 10;
var array = [];

while (i--) {
    (function (i) {
        var i = i;
        array.push(function() {
            return i + i;
        });
    })(i);
}

console.log([
    array[0](),
    array[1](),
])
```
