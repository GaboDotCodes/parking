import { LitElement, html } from 'lit';
import '@vaadin/text-field';
import style from './vehicles-search.css';

const render = () => html`
  <style>${style}</style>
  <div class="container">
  <h2>CONSULTA DE VEHÍCULOS</h2>
  <vaadin-text-field aria-label="search" placeholder="Buscar registro" clear-button-visible>
    <span class="material-icons" slot="prefix">Buscar</span>
</vaadin-text-field>
  </div>
`;

class VehiclesSearch extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('vehicles-search', VehiclesSearch);

export default VehiclesSearch;
