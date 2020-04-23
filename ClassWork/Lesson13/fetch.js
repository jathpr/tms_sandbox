'use strict';
const fetch = require('node-fetch');

(async () => {
  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);

  let commits = await response.json(); // читаем ответ в формате JSON
  // let text = await response.text();

  // console.log('in async text', text.slice(0, 400));
  console.log('in async json', commits[0].author.login);
})();

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then((response) => {
    return response.json();
  })
  .then((commits) => console.log(commits[0].author.login));

fetch('https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits')
  .then((response) => response.text())
  .then((commits) => console.log(commits.slice(0, 400)));
