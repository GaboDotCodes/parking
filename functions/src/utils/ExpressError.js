class ExpressError extends Error {
  constructor(httpCode, message) {
    super(message);
    this.code = httpCode;
  }
}

exports.ExpressError = ExpressError;
