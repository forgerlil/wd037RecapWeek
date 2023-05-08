const errorHandler = (err, req, res, next) => {
  console.log(err);
  return res.status(err.statusCode || 500).json({ error: err.message ?? err });
};

module.exports = errorHandler;
