'use strict';
const x = 1;
console.log(x);
{
  const x = 12;
  console.log(x);
}
console.log(x);
{
  // a = 12;
  // console.log('a', a);
}

const foo = 7;
const bar = {
  foo: 7,
  bar: 'rt'
};

edite(foo);
edite(bar);

function edite(inp) {
  if (typeof inp !== 'number') inp.foo = 11;
  else inp = 11;

  console.log('inp', inp);
}
console.log('edite -> edite', edite);

console.log('foo', foo);
console.log('bar', bar);

const show = () => console.log('a');
