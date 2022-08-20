const { appExpress } = require('../utils/appExpress');
const { functions } = require('../utils/firebase');

appExpress.post('/', async (req, res) => {
  res.status(200).json({ message: "TODO MUY CHIMBA X2" });
});

exports.func = functions.https.onRequest(appExpress);