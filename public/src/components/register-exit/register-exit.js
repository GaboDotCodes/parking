import { LitElement, html } from 'lit';

import '../content-layout/content-layout';

const render = () => html`
  <h1>REGISTRAR SALIDA</h1>
`;

class RegisterExit extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('register-exit', RegisterExit);

export default RegisterExit;
