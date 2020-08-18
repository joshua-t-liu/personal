require('babel-register')({
  presets: ['env', 'react'],
  plugins: ['dynamic-import-node', 'babel-plugin-styled-components']
});

if (typeof(window) === 'undefined') global.window = new Object();

const fs = require('fs');
const express = require('express');
const http = require('http');
const { createElement } = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const { AppSSR } = require('./client/app');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));

app.get(/\/$|\/portfolio$/, (req, res) => {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(sheet.collectStyles(createElement(AppSSR, { location: req.path })));
    const styleTags = sheet.getStyleTags();
    fs.readFile('./dist/template.html', 'utf8', (err, template) => {
      template = template.replace('application', html);
      template = template.replace('styles', styleTags);
      res.send(template);
    });
  } catch (err) {
    console.log(err);
  } finally {
    sheet.seal();
  }
});

app.get(/\/portfolio\/.+/, (req, res) => {
  res.redirect('/portfolio');
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
    response.on('error', () => console.log('error with imagage gallery micro-service'));
  });

  request.end();
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000