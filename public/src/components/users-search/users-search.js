import { LitElement, html } from 'lit';

const render = () => html`
  <h2>CONSULTA DE USUARIOS</h2>
`;

class UsersSearch extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('users-search', UsersSearch);

export default UsersSearch;
