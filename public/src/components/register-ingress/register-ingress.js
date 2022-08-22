import { LitElement, html } from 'lit';

import '../content-layout/content-layout';

const render = () => html`
  <h1>REGISTRAR INGRESO</h1>
`;

class RegisterIngress extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('register-ingress', RegisterIngress);

export default RegisterIngress;
