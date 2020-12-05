const http = require('http');
const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {  
  const options = {
    hostname: 'localhost',
    port: 3100,
    path: req.path,
    method: 'GET',
  };

  const request = http.request(options, (response) => {
    const body = [];
    response.on('data', (chunk) => body.push(chunk));
    response.on('end', () => res.send(Buffer.concat(body)));
    response.on('error', (err) => {
      console.error(err);
      res.status(404).send('Chartsy is temporarily unavailable.');
    });
  });

  request.on('error', (err) => {
    console.log(err);
    res.send(404).send('Chartsy is temporarily unavailable.');
  })

  request.end();
});

module.exports = router;