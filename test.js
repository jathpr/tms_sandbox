'use strict';
// const x = require('./expo');

let promise = new Promise(function (resolve, reject) {
  // setTimeout(() => resolve(1), 500);
});

function onError(error) {
  console.log('onError -> error', error);
}

function onSuccess(data) {
  console.log('onSuccess -> data', data);
}

(async () => {
  let url = 'https://api.github.com/repos/javascript-tutorial/en.javascript.info/commits';
  let response = await fetch(url);

  let commits = await response.json(); // читаем ответ в формате JSON

  console.log(commits[0].author.login);
})();
