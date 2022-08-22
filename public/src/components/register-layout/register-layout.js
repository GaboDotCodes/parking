import { LitElement, html } from 'lit';

import '../content-layout/content-layout';

const render = () => html`
  <content-layout>
    <slot></slot>
  </content-layout>
`;

class RegisterLayout extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('register-layout', RegisterLayout);

export default RegisterLayout;
