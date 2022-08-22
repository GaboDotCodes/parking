const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { error } = require('../utils/firebase');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true }));

app.get('/:vehicleId', async (req, res) => {
  try {
    res.status(200).json({ message: `VEHICLE ${req.params.vehicleId}` });
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ message });
  }
});

app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'ALL VEHICLES' });
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ message });
  }
});

exports.vehicles = app;
