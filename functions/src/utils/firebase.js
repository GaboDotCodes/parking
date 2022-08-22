const admin = require('firebase-admin');
const functions = require('firebase-functions');

admin.initializeApp({
  credential: admin.credential.applicationDefault(),
});

const auth = admin.auth();
const firestore = admin.firestore();

exports.firestore = firestore;
exports.auth = auth;
exports.functions = functions;
exports.log = functions.logger.log;
exports.error = functions.logger.error;
