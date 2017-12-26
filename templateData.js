const toCapitalCase = require('./utils/toCapitalCase');
const currentYear = new Date().getFullYear();

module.exports = function(pageName) {
  switch(pageName) {
    case 'home':
      return {
        pageName: 'Sample Haven',
        welcomeMessage: 'Get your samples here',
        currentYear
      };

    default:
      return {
        pageName: toCapitalCase(pageName),
        currentYear
      };
  }
}
