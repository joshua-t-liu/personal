const express = require('express');

const app = express();
const PORT = 3000;

app.use(express.static('dist'));

app.get('/portfolio', (req, res) => {
  res.redirect('/')
})

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});
