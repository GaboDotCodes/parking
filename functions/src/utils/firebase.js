const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const firestore = admin.firestore();

exports.firestore = firestore;
exports.functions = functions;
