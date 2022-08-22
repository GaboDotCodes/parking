const { parkings } = require('./src/services/Parkings');
const { registers } = require('./src/services/Registers');
const { users } = require('./src/services/Users');
const { vehicles } = require('./src/services/Vehicles');

const { functions } = require('./src/utils/firebase');

exports.parkings = functions.https.onRequest(parkings);
exports.registers = functions.https.onRequest(registers);
exports.users = functions.https.onRequest(users);
exports.vehicles = functions.https.onRequest(vehicles);
