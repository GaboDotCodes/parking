/* eslint-disable no-underscore-dangle */
const { auth, log, error } = require('../utils/firebase');

const authenticate = async (req, res, next) => {
  log('Check if request is authorized with Firebase ID token');

  if ((!req.headers.authorization || !req.headers.authorization.startsWith('Bearer '))
    && !(req.cookies && req.cookies.__session)) {
    error(
      'No Firebase ID token was passed as a Bearer token in the Authorization header.',
      'Make sure you authorize your request by providing the following HTTP header:',
      'Authorization: Bearer <Firebase ID Token>',
      'or by passing a "__session" cookie.',
    );
    res.status(403).send('Unauthorized');
    return;
  }

  let idToken;
  if (req.headers.authorization && req.headers.authorization.startsWith('Bearer ')) {
    log('Found "Authorization" header');
    // Read the ID Token from the Authorization header.
    [, idToken] = req.headers.authorization.split('Bearer ');
  } else if (req.cookies) {
    log('Found "__session" cookie');
    idToken = req.cookies.__session;
  } else {
    res.status(403).send('Unauthorized');
    return;
  }

  try {
    const decodedIdToken = await auth.verifyIdToken(idToken);
    req.user = decodedIdToken;
    next();
    return;
  } catch (err) {
    err('Error while verifying Firebase ID token:', err);
    res.status(403).send('Unauthorized');
  }
};

exports.authenticate = authenticate;
