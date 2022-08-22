const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { authenticate } = require('../middleware/authenticate');
const { error, firestore } = require('../utils/firebase');
const { ExpressError } = require('../utils/ExpressError');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true }));

app.use(authenticate);

app.get('/my-parking', async (req, res) => {
  try {
    const { uid } = req.user;
    const myParkingRef = firestore.doc(`parkings/${uid}`);
    const myParkingDS = await myParkingRef.get();
    if (myParkingDS.exists) {
      res.status(200).json({ response: myParkingDS.data() });
    } else {
      throw new ExpressError(404, 'Aun no tienes parqueadero creado');
    }
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ code: 'NO_PARKING', message });
  }
});

app.post('/', async (req, res) => {
  try {
    const { uid } = req.user;
    const { body } = req;
    const myParkingRef = firestore.doc(`parkings/${uid}`);
    const myParkingDS = await myParkingRef.get();
    if (myParkingDS.exists) {
      throw new ExpressError(400, 'Ya tienes parqueadero creado');
    } else {
      await myParkingRef.create({
        ...body,
      });

      res.status(200).json({ response: (await myParkingRef.get()).data() });
    }
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ code: 'NO_PARKING', message });
  }
  return null;
});

exports.parkings = app;
