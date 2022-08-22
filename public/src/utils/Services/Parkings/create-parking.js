import appState from '../../State/appState';

import { parkingsURL } from '../../Firebase/functions';

const createParking = async (data) => {
  const headers = {
    'Content-Type': 'application/json',
    Authorization: `Bearer ${appState.token}`,
  };

  const body = {
    ...data,
  };

  const response = await fetch(`${parkingsURL}/`, { method: 'POST', headers, body: JSON.stringify(body) });

  const responseJson = await response.json();

  if (response.status >= 200 && response.status <= 299) {
    return responseJson;
  }
  throw responseJson;
};

export default createParking;
