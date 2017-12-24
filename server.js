const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('hello express application');
});

app.listen(3000);
