import { LitElement, html } from 'lit';

const render = () => html`
  <h2>REGISTRO DE VEHICULOS</h2>
`;

class VehiclesRegister extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('vehicles-register', VehiclesRegister);

export default VehiclesRegister;
