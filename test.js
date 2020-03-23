// \* Найти последовательность Хэеса, для числа должно быть выдано сообщение, с самой последовательностью, количеством шагов,
// которое понадобилось для нахождения этой последовательности, и вершиной последовательности, это максимальное число из этой последовательности. Последовательность
// Хэеса считается так: если ввели число 9, то проверяем его, если оно чётное, делим на 2, если нечетное, умножаем на 3 и прибавляем 1, и так до тех пор пока число не
// будет равно 1.

const start = 9;

let curent = start;
let steps = 0;
let maxValue = start;
while (curent != 1) {
  if (curent > maxValue) maxValue = curent;
  if (curent % 2 === 0) {
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
