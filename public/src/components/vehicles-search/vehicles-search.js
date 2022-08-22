import { LitElement, html } from 'lit';

const render = () => html`
  <h2>CONSULTA DE VEHICULOS</h2>
`;

class VehiclesSearch extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('vehicles-search', VehiclesSearch);

export default VehiclesSearch;
