const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
  console.log(req.url);
  console.log(req.method);

  let path = './views/';
  switch (req.url) {
    case '/':
      path += 'index.html';
      res.statusCode = 200;
      break;
    case '/about':
      path += 'about.html';
      res.statusCode = 200;
      break;
    case '/contact-me':
      path += 'contact-me.html';
      res.statusCode = 200;
      break;
    default:
      path += '404.html';
      res.statusCode = 404;
      break;
  }

  res.setHeader('Content-Type', 'text/html');
  fs.readFile(path, (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(8080, 'localhost', () => {
  console.log('listening for requests on port 8080');
});
