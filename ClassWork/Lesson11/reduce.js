const arr = [0, 1, 5];

const sum = arr.reduce((pv, cv) => pv + cv, 0);
console.log('sum', sum);

const obj = arr.reduce((pv, cv, index) => ({ ...pv, [index]: cv }), {});
console.log('obj', obj);
