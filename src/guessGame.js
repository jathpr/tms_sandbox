const guessGame = () => {
  let minVal, maxVal;

  const setRange = (min, max) => {
    minVal = min;
    maxVal = max;
  };

  const guess = () => Math.floor(minVal + maxVal / 2 + minVal);
  return { setRange, guess };
};

const game = new guessGame();
game.setRange(0, 11);
const x = game.guess();
console.log(x);
