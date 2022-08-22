const express = require('express');
const cors = require('cors')({
  origin: true,
});
const cookieParser = require('cookie-parser');

const appExpress = (app) => {
  app.use(cookieParser());
  app.use(express.json());
  app.use(cors);
  return app;
};

exports.appExpress = appExpress;
