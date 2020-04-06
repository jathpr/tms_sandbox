(() => {
  const container = document.getElementById('root');
  let moveNumber = 0;

  const createField = () => {
    const field = document.createElement('div');
    field.className = 'field';
    container.append(field);

    for (let i = 0; i < 9; i++) {
      const cell = document.createElement('div');
      cell.className = 'cell';
      field.append(cell);
    }
  };

  const getSimbol = move => {
    if (move % 2 === 0) {
      const cross = document.createElement('div');
      cross.className = 'cross';
      return cross;
    }
    const circle = document.createElement('div');
    circle.className = 'circle';
    return circle;
  };

  const makeMove = () => {
    const cell = document.getElementsByClassName('cell');

    for (let i = 0; i < cell.length; i++) {
      cell[i].addEventListener('click', function() {
        if (!this.innerHTML) {
          this.append(getSimbol(moveNumber));
          moveNumber = ++moveNumber;
        }
      });
    }
  };

  createField();
  makeMove();
})();
