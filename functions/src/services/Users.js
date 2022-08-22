const express = require('express');
const cors = require('cors');
const cookieParser = require('cookie-parser');

const { error, firestore } = require('../utils/firebase');
const { ExpressError } = require('../utils/ExpressError');

const app = express();

app.use(cookieParser());
app.use(express.json());
app.use(cors({ origin: true }));

app.post('/', async (req, res) => {
  try {
    const { uid } = req.user;
    const { body } = req;
    // { name, typeDoc, docNumber, phone, address, email, subscription, expireAt }
    const { typeDoc, docNumber } = body;
    const usersQS = await firestore.collection('users')
      .where('typeDoc', '==', typeDoc)
      .where('docNumber', '==', docNumber)
      .where('parking', '==', uid)
      .get();
    if (usersQS.empty) {
      const newUserRef = firestore.collection('users').doc();
      await newUserRef.create({
        ...body,
        parking: uid,
      });
      const newUserDS = await newUserRef.get();
      res.status(200).json({ response: newUserDS.data() });
    } else {
      throw new ExpressError(400, 'Ya tienes parqueadero creado');
    }
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ code: 'NO_PARKING', message });
  }
  return null;
});

app.get('/', async (req, res) => {
  try {
    res.status(200).json({ message: 'ALL USERS' });
  } catch (err) {
    const { code = 500, message = err } = err;
    error(err);
    res.status(code).send({ message });
  }
});

exports.users = app;
