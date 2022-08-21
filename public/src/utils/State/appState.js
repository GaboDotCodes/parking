import { LitState } from 'lit-element-state';

class State extends LitState {
  static get stateVars() {
    return {
    };
  }
}

const appState = new State();

export default appState;
