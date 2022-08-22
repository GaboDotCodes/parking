const { appExpress } = require('../utils/appExpress');

appExpress.get('/', async (req, res) => {
  res.status(200).json({ message: 'TODO MUY CHIMBA X2' });
});

exports.func = appExpress;
