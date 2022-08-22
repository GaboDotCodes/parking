const { functions } = require('./src/utils/firebase');

const { func } = require('./src/functions/func');

exports.func = functions.https.onRequest(func);
