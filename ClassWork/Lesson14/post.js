'use strict';
const fetch = require('node-fetch');
const config = require('../../config.json');

const msg = 'Hello world';

(async () => {
  let url = `https://api.telegram.org/bot${config.token}/sendMessage`;

  const tUrl = new URL(url);
  tUrl.searchParams.set('chat_id', config.chat);
  tUrl.searchParams.set('parse_mode', 'html');
  tUrl.searchParams.set('text', 'Привет');

  const options = {
    method: 'POST',
  };

  let response = await fetch(tUrl, options);

  // let commits = await response.json(); // читаем ответ в формате JSON
  // let text = await response.text();

  // console.log('in async text', text.slice(0, 400));
  // console.log('in async json', commits);
})();
