import { LitElement, html } from 'lit';

const render = () => html`
  <h2>REGISTRO DE USUARIOS</h2>
`;

class UsersRegister extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('users-register', UsersRegister);

export default UsersRegister;
