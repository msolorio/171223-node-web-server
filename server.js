const express = require('express');
const hbs = require('hbs');

const app = express();

app.set('view engine', 'hbs');

app.use('/css', express.static(`${__dirname}/public/css`));

app.get('/', (req, res) => {
  res.render('home.hbs');
});

app.get('/about', (req, res) => {
  res.render('about.hbs');
});

app.get('/notavailable', (req, res) => {
  res.status(404).json({
    errorMessage: 'route not available'
  });
});

app.listen(3000, () => {
  console.log('app listening on port 3000');
});
