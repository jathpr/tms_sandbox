let http = require('http');
let url = require('url');
let querystring = require('querystring');
let staticNode = require('node-static');

let fileServer = new staticNode.Server('.');

let subscribers = Object.create(null);

function onSubscribe(req, res) {
  let id = Math.random();

  res.setHeader('Content-Type', 'text/plain;charset=utf-8');
  res.setHeader('Cache-Control', 'no-cache, must-revalidate');
  res.setHeader('Access-Control-Allow-Origin', 'null'); // for work from file
  // res.setHeader('Access-Control-Allow-Origin', 'http://localhost:8888'); // for work from client

  subscribers[id] = res;

  req.on('close', function () {
    delete subscribers[id];
  });
}

function publish(message) {
  for (let id in subscribers) {
    let res = subscribers[id];
    res.end(message);
  }

  subscribers = Object.create(null);
}

function accept(req, res) {
  let urlParsed = url.parse(req.url, true);

  // новый клиент хочет получать сообщения
  if (urlParsed.pathname == '/subscribe') {
    onSubscribe(req, res);
    return;
  }

  // отправка сообщения
  if (urlParsed.pathname == '/publish' && req.method == 'POST') {
    // принять POST
    req.setEncoding('utf8');
    let message = '';
    req
      .on('data', function (chunk) {
        message += chunk;
      })
      .on('end', function () {
        publish(message); // опубликовать для всех
        res.setHeader('Access-Control-Allow-Origin', 'null');
        res.end('ok');
      });

    return;
  }

  // остальное - статика
  fileServer.serve(req, res);
}

function close() {
  for (let id in subscribers) {
    let res = subscribers[id];
    res.end();
  }
}

// -----------------------------------

if (!module.parent) {
  http.createServer(accept).listen(8080);
  console.log('Server running on port 8080');
} else {
  exports.accept = accept;

  if (process.send) {
    process.on('message', (msg) => {
      if (msg === 'shutdown') {
        close();
      }
    });
  }

  process.on('SIGINT', close);
}
