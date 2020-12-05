const http = require('http');
const express = require('express');
const router = express.Router();

router.all('*', (req, res) => {
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
      res.status(404).send('Image gallery is temporarily unavailable.')
    });
  });

  request.on('error', (error) => {
    console.log('failed to connect to image gallery');
    res.status(404).send('Image gallery is temporaily down.');
  });
  
  request.end();
});

module.exports = router;