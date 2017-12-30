const express = require('express');
const hbs = require('hbs');
const { PORT } = require('./const');
const templateData = require('./templateData');
const logger = require('./middleware/logger');
const maintenance = require('./middleware/maintenance');

const app = express();

hbs.registerPartials(`${__dirname}/views/partials`);
hbs.registerHelper('getCurrentYear', () => new Date().getFullYear());
hbs.registerHelper('toUpperCase', (text) => text.toUpperCase());

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

app.use(logger);

serveStaticFiles(staticFileTypes);

// uncomment to initiate maintenance mode
// app.use(maintenance);

app.get('/', (req, res) => res.render('home', templateData('home')));

serveTemplates(pages);

app.listen(PORT, () => {
  console.log(`Your app is listening on port ${PORT}`);
});
