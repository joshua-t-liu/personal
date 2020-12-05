const express = require('express');
const router = express.Router();
const path = require('path');

router.get('/easychart', (req, res) => res.redirect('/chartsy'));

router.all('*', (req, res) => {
  res.sendFile(path.resolve(__dirname, '../../dist/index.html'));
});

module.exports = router;
