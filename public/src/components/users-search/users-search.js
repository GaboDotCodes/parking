import { LitElement, html } from 'lit';
import '@vaadin/text-field';

import style from './users-search.css';

const render = () => html`
  <style>${style}</style>
  <div class="container">
    <h2>CONSULTA DE USUARIOS</h2>
  <vaadin-text-field aria-label="search" placeholder="Buscar registro" clear-button-visible>
    <span class="material-icons" slot="prefix">Buscar</span>
</vaadin-text-field>
</div>
  
`;

class UsersSearch extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('users-search', UsersSearch);

export default UsersSearch;
