import { LitElement, html } from 'lit';

import '../content-layout/content-layout';

const render = () => html`
  <content-layout .items=${[
    { text: 'Registrar', icon: 'add_circle', link: '/users/register' },
    { text: 'Consultar', icon: 'search', link: '/users/search' },
  ]}>
    <slot></slot>
  </content-layout>
`;

class UsersLayout extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('users-layout', UsersLayout);

export default UsersLayout;
