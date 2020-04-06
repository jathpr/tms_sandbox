(() => {
  const data = [
    {
      firstName: 'Ashton',
      lastName: 'Kutcher',
      age: 40,
    },
    {
      firstName: 'Bradley',
      lastName: 'Pitt',
      age: 54,
    },
    {
      firstName: 'Hannah',
      lastName: 'Dakota',
      age: 24,
    },
  ];

  const rowTypes = {
    header: 'th',
    body: 'td',
  };

  const createRow = (rowType, values) => {
    const row = document.createElement('tr');
    for (const value of values) {
      const cell = document.createElement(rowType);
      const content = document.createTextNode(value);
      cell.append(content);
      row.append(cell);
    }
    return row;
  };

  const table = document.getElementById('table');
  const header = createRow(rowTypes.header, Object.keys(data[0]));
  table.append(header);

  for (const user of data) {
    const row = createRow(rowTypes.body, Object.values(user));
    table.append(row);
  }
})();
