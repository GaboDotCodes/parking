import { LitState } from 'lit-element-state';

class State extends LitState {
  static get stateVars() {
    return {
      token: null,
      parking: null,
    };
  }
}

const appState = new State();

export default appState;
