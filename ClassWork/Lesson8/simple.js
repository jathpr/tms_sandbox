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

  const table = document.getElementById('table');
  for (const user of data) {
    const row = document.createElement('tr');
    for (const key in user) {
      const cell = document.createElement('td');
      const content = document.createTextNode(user[key]);
      cell.append(content);
      row.append(cell);
    }
    table.append(row);
  }
})();
