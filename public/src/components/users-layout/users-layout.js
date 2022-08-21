import { LitElement, html } from 'lit';

const render = () => html`
  <h1>MENU DE USUARIOS</h1>
  <slot></slot>
`;

class UsersLayout extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('users-layout', UsersLayout);

export default UsersLayout;
