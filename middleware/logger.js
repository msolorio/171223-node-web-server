module.exports = function(req, res, next) {
  const now = new Date().toString();
  console.log(`\n${now}\nrequest method: ${req.method}\nrequest path: ${req.path}\n`);
  next();
};
