const fs = require('fs');

module.exports = function(req, res, next) {
  const date = new Date().toString();
  const log = `${date}: ${req.method} ${req.path}`;
  console.log(log);

  fs.appendFile('./server.log', `${log}\n`, (err) => {
    if (err) console.error('Unable to append to server.log:', err);
  });

  next();
};
