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

  let isEdit = false;
  let isRemoving = false;

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

  //show section
  const table = document.getElementById('table');
  const header = createRow(rowTypes.header, Object.keys(data[0]));
  table.append(header);

  for (const user of data) {
    const row = createRow(rowTypes.body, Object.values(user));
    table.append(row);
  }

  // add user section
  const addUser = () => {
    const firstName = prompt('User name');
    const lastName = prompt('User surname');
    const age = prompt('User age');
    const row = createRow(rowTypes.body, [firstName, lastName, age]);
    table.append(row);
  };

  const button = document.createElement('button');
  button.onclick = addUser;
  button.style.width = '50px';
  button.style.height = '30px';
  button.textContent = 'add';

  document.body.append(button);

  // remove user section
  const removeButton = document.createElement('button');
  removeButton.style.width = '70px';
  removeButton.style.height = '30px';
  removeButton.textContent = 'remove';

  const toggleRemovingAction = () => {
    isRemoving = !isRemoving;
    removeButton.style.backgroundColor = isRemoving ? '#933' : '';
    isEdit = false;
    editButton.style.backgroundColor = '';
  };

  removeButton.onclick = toggleRemovingAction;
  document.body.append(removeButton);

  table.addEventListener('click', function (event) {
    if (!isRemoving) return;

    let tr = event.target.closest('tr');

    if (!tr) return;

    if (tr.children[0].nodeName === 'TH') return;

    tr.remove();
    toggleRemovingAction();
  });

  // edite section
  const editButton = document.createElement('button');
  editButton.style.width = '70px';
  editButton.style.height = '30px';
  editButton.textContent = 'edite';

  const toggleEditAction = () => {
    isEdit = !isEdit;
    editButton.style.backgroundColor = isEdit ? '#393' : '';
    isRemoving = false;
    removeButton.style.backgroundColor = '';
  };

  editButton.onclick = toggleEditAction;
  document.body.append(editButton);

  table.addEventListener('click', function (event) {
    if (!isEdit) return;

    let target = event.target;

    if (target.tagName != 'TD') return;

    const oldValue = target.textContent;

    target.innerHTML = `<input value="${oldValue}"></input>`;
    target.children[0].focus();
    target.children[0].onblur = () => {
      const newValue = target.children[0].value;
      target.innerText = newValue;
    };

    toggleEditAction();
  });
})();
