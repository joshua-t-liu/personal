const express = require('express');
const compression = require('compression')
const routes = require('./routes');

const app = express();
const PORT = 3000;

app.use(compression());
app.use(express.static('./dist'));

routes(app);

app.listen(PORT, () => {
  console.log('listening on port', PORT);
});

// redirects port 80 to port 3000
//sudo iptables -t nat -A PREROUTING -i eth0 -p tcp --dport 80 -j REDIRECT --to-port 3000