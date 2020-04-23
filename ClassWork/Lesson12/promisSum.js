/* 
// callback way

function sum(getX, getY, callback) {
    var x, y;
    getX(function(result) {
        x = result;
        if (y !== undefined) {
            callback(x + y);
        }
    });
    getY(function(result) {
        y = result;
        if (x !== undefined) {
            callback(x + y);
        }
    });
}
// Синхронная или асинхронная функция, которая загружает значение`x`
function fetchX() {
    // ..
}


// Синхронная или асинхронная функция, которая загружает значение `y`
function fetchY() {
    // ..
}
sum(fetchX, fetchY, function(result) {
    console.log(result);
});
*/

/*
// promise code only

function sum(xPromise, yPromise) {
  return Promise.all([xPromise, yPromise])
  .then(function (values) {
    return values[0] + values[1];
  });
}

sum(fetchX(), fetchY()).then(function (sum) {
  console.log(sum);
});

*/

// promise with comments

function sum(xPromise, yPromise) {
  // `Promise.all([ .. ])` принимает массив промисов,

  // и возвращает новый промис, который ожидает

  // разрешения всех промисов, которые были в массиве

  return (
    Promise.all([xPromise, yPromise])

      // когда этот промис будет разрешён, возьмём

      // полученные значения `X` и `Y` и суммируем их.

      .then(function (values) {
        // `values` - это массив сообщений из ранее

        // разрешённых промисов

        return values[0] + values[1];
      })
  );
}

// `fetchX()` и `fetchY()` возвращают промисы для
// соответствующих значений. Эти значения могут быть
// доступны *сейчас* или *позже*.
sum(fetchX(), fetchY())
  // получаем промис для сложения этих
  // двух чисел.
  // теперь мы используем вызов `then(...)` для организации ожидания
  // разрешения этого возвращённого промиса.
  .then(function (sum) {
    console.log(sum);
  });
