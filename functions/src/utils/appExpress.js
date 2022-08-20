const express = require('express');
const cors = require('cors');

const appExpress = express();

appExpress.use(cors());
appExpress.use(express.json());

exports.appExpress = appExpress;