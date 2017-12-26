const express = require('express');
const hbs = require('hbs');
const { PORT } = require('./config');
const templateData = require('./templateData');

const app = express();

app.set('view engine', 'hbs');

const staticFileTypes = [
  'css',
  'js',
  'img'
];

const pages = [
  'about',
  'bio'
];

// serves static asset by directory name
function serveStaticFiles(dirNames) {
  dirNames.forEach((dirName) => {
    app.use(`/${dirName}`, express.static(`${__dirname}/public/${dirName}`));
  });
}

// serves template with matching name from route
function serveTemplates(pages) {
  pages.forEach((pageName) => {
    app.get(`/${pageName}`, (req, res) => {
      res.render('template', templateData(pageName));
    });
  });
}

serveStaticFiles(staticFileTypes);

app.get('/', (req, res) => res.render('home', templateData('home')));

serveTemplates(pages);

// app.get('/about', (req, res) => {
//   res.render('about', {
//     pageTitle: 'About',
//     currentYear: new Date().getFullYear()
//   });
// });
//
// app.get('/bio', (req, res) => {
//   res.render('bio', {
//     pageTitle: 'Bio',
//     currentYear: new Date().getFullYear()
//   });
// });

app.get('/notavailable', (req, res) => {
  res.status(404).json({
    errorMessage: 'route not available'
  });
});

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
