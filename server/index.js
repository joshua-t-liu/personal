require('@babel/register')({
  extensions: ['.js', '.jsx', '.ts', '.tsx'],
  presets: ['@babel/preset-env', '@babel/preset-react', '@babel/preset-typescript'],
  plugins: ['babel-plugin-styled-components']
});

if (typeof(window) === 'undefined') global.window = new Object();

const fs = require('fs');
const express = require('express');
const http = require('http');
const path = require('path');
const { createElement } = require('react');
const ReactDOMServer = require('react-dom/server');
const { ServerStyleSheet } = require('styled-components');
const compression = require('compression')
const { AppSSR } = require('../client/app');

const app = express();
const PORT = 3000;

app.use(compression());
app.use(express.static('./dist'));

app.get('/portfolio', (req, res) => res.redirect('/'));

app.get('/chartsy', (req, res) => res.redirect('http://www.jliuportfolio.com:3100'));
app.get('/easychart', (req, res) => res.redirect('http://www.jliuportfolio.com:3100'));

app.get('/', (req, res) => {
  const sheet = new ServerStyleSheet();
  try {
    const html = ReactDOMServer.renderToString(sheet.collectStyles(createElement(AppSSR, { location: ''  })));
    const styleTags = sheet.getStyleTags();
    fs.readFile(path.resolve(__dirname, '../dist/template.html'), 'utf8', (err, template) => {
      template = template.replace('application', html);
      template = template.replace('styles', styleTags);
      res.send(template);
    });
  } catch (err) {
    console.log(err);
    res.status(404).send('Sorry, temporarily down.')
  } finally {
    sheet.seal();
  }
});

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

  request.end();
});

app.post('/followup', (req, res) => {
  res.send('complete');
});

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});


//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000