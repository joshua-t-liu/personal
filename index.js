const express = require('express');
const http = require('http');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));

app.get('/portfolio', (req, res) => {
  res.redirect('/');
});

app.get(/\/portfolio\/.+/, (req, res) => {
  res.redirect('/');
});

app.get(/.*/, (req, res) => {
  const options = {
    hostname: 'localhost',
    port: 3001,
    path: req.path,
    method: 'GET',
  };

  const request = http.request(options, (response) => {
    const body = [];
    response.on('data', (chunk) => body.push(chunk));
    response.on('end', () => {
      // res.set('Content-Type', response.headers['content-type']);
      res.send(Buffer.concat(body));
    });
    response.on('error', () => console.log('error with imagage gallery micro-service'));
  });

  request.end();
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000