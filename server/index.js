const express = require('express');
const http = require('http');
const compression = require('compression')

const app = express();
const PORT = 3000;

app.use(compression());
app.use(express.static('./dist'));

app.get('/portfolio', (req, res) => res.redirect('/'));

app.get('/chartsy', (req, res) => res.redirect('http://www.jliuportfolio.com:3100'));

app.get('/easychart', (req, res) => res.redirect('http://www.jliuportfolio.com:3100'));

app.get(/\/photos|\/mapView|\/streetView|\/schools|\/commute/, (req, res) => {
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
      res.send(Buffer.concat(body));
    });
    response.on('error', () => {
      console.log('error with imagage gallery micro-service');
      res.status(404).send('Image gallery is temporarily down.')
    });
  });

  request.on('error', (error) => {
    console.log('failed to connect to image gallery');
    res.status(404).send('Image gallery is temporaily down.');
  });
  
  request.end();
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000