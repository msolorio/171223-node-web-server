const express = require('express');

const app = express();

app.get('/', (req, res) => {
  res.send('<h2>home page</h2>');
});

app.get('/about', (req, res) => {
  res.json({
    companyName: 'Sam\'s Jams',
    inventory: [
      {
        name: 'Strawberry Jam',
        ammount: 3
      },
      {
        name: 'Grape Jelly',
        ammount: 2
      }
    ],
    location: '123 Sweet Street'
  });
});

app.get('/notavailable', (req, res) => {
  res.status(404).json({
    errorMessage: 'route not available'
  });
});

app.listen(3000);
