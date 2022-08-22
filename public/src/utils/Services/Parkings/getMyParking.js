import appState from '../../State/appState';

import { parkingsURL } from '../../Firebase/functions';

const getMyParking = async () => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${appState.token}`,
  };

  const response = await fetch(`${parkingsURL}/my-parking`, { method: 'GET', headers });
  const responseJson = await response.json();

  if (response.status >= 200 && response.status <= 299) {
    return responseJson;
  }
  throw responseJson;
};

export default getMyParking;
