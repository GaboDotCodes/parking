const baseURLS = {
  prod: 'https://us-central1-neas-parking.cloudfunctions.net/',
  dev: 'http://localhost:5001/neas-parking/us-central1/',
};

const baseURL = ['localhost', '127.0.0.1'].includes(window.location.hostname) ? baseURLS.dev : baseURLS.prod;

const parkingsURL = `${baseURL}parkings`;
const registersURL = `${baseURL}registers`;
const usersURL = `${baseURL}users`;
const vehiclesURL = `${baseURL}vehicles`;

export {
  parkingsURL,
  registersURL,
  usersURL,
  vehiclesURL,
};
