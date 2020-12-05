const express = require('express');
const router = express.Router();

router.get('/easychart', (req, res) => res.redirect('/chartsy'));

router.get(/\/portfolio|\/photos|\/mapView|\/streetView|\/schools|\/commute/, (req, res) => {
  res.redirect('/');
});

module.exports = router;