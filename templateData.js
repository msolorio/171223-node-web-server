const toCapitalCase = require('./utils/toCapitalCase');
const headquarters = 'San Diego';

module.exports = function(pageName) {
  switch(pageName) {
    case 'home':
      return {
        pageName: 'Home',
        welcomeMessage: 'Get your samples here',
        headquarters
      };

    default:
      return {
        pageName: pageName,
        headquarters
      };
  }
}
