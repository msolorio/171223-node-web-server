const templateData = require('../templateData');

module.exports = function(req, res, next) {
  res.render('maintenance', templateData('maintenance'));
}
