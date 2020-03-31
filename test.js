'use strict';

let num = [5, 4, 6, 9, 8, 1, 2, 10, 3, 7];
num.sort(sort);
console.log(num);

function sort(a, b) {
  if (a - b < 0) {
    return -1;
  }
  if (a - b > 0) {
    return 1;
  } else {
    return 0;
  }
}

function min(v1, v2) {
  if (v1 < v2) {
    return v1;
  } else {
    return v2;
  }
}

let vil = [
  [4, 6],
  [5, 7],
  [10, 8],
  [11, 13],
  [14, 16]
];

{
  const element = vil[0];
  const t1 = element[0];
  const t2 = element[1];
  let min1;
  if (t1 < t2) {
    min1 = t1;
  } else {
    min1 = t2;
  }

  console.log(min1);
}
{
  const element = vil[1];
  const t1 = element[0];
  const t2 = element[1];
  let min1;
  if (t1 < t2) {
    min1 = t1;
  } else {
    min1 = t2;
  }

  console.log(min1);
}

{
  const element = vil[2];
  const t1 = element[0];
  const t2 = element[1];
  let min1;
  if (t1 < t2) {
    min1 = t1;
  } else {
    min1 = t2;
  }

  console.log(min1);
}
{
  const element = vil[3];
  const t1 = element[0];
  const t2 = element[1];
  let min1;
  if (t1 < t2) {
    min1 = t1;
  } else {
    min1 = t2;
  }

  console.log(min1);
}
{
  const element = vil[4];
  const t1 = element[0];
  const t2 = element[1];
  let min1;
  if (t1 < t2) {
    min1 = t1;
  } else {
    min1 = t2;
  }

  console.log(min1);
}
