const Shapes = {
  circle: 'Circle',
  square: 'Square',
};

function Shape(type, name) {
  this.name = name;
  this.type = type;
  this.sq = function () {
    return this.calcSq();
  };
}

function Сircle(name, d) {
  const circle = new Shape(Shapes.circle, name);
  circle.d = d;
  circle.calcSq = function () {
    return (this.d / 2) ** 2 * Math.PI;
  };
  Object.defineProperty(circle, 'square', {
    get: function () {
      return this.calcSq();
    },
    enumerable: true,
  });
  return circle;
}

function Square(name, side) {
  const shape = new Shape(Shapes.square, name);
  for (const key in shape) {
    this[key] = shape[key];
  }
  this.side = side;
  this.calcSq = function () {
    return this.side ** 2;
  };
  Object.defineProperty(this, 'square', {
    get: () => {
      return this.calcSq();
    },
    enumerable: true,
  });
}

const showShape = (shape) => {
  console.log('--------------------');
  console.log('showShape -> name', shape.name);
  console.log('showShape -> type', shape.type);
  console.log('showShape -> square', shape.square);
  switch (shape.type) {
    case Shapes.circle:
      console.log('showShape -> diameter', shape.d);
      break;
    case Shapes.square:
      console.log('showShape -> side', shape.side);
      break;

    default:
      break;
  }
};

showShape(new Сircle('one', 3));
showShape(new Square('two', 3));
