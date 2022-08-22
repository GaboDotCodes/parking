import { LitElement, html } from 'lit';

import '@vaadin/combo-box';
import '@vaadin/item';
import '@vaadin/text-field';
import '@vaadin/button';

// Arrays combo-box of "marcas"
const brands = {
  Carro: ["Mercedes benz", "Chevrolet", "Renault", "Mazda", "Audi", "BMW","Volvo", "Fiat", "Subaru", "Ford", "Citroën", "Honda", "Peugeot", "Porsche", "Land Rover", "KIA", "Lexus"],
  Moto: ["Ducati", "MV Augusta", "Benelli", "BMW", "Aprilia", "Bajaj", "Benelli", "Auteco", "AKT", "CFMOTO", "Suzuki", "Yamaha", "Peugeot", "KTM", "Kawasaki", "Royal Enfield", "Vespa", "TVS"],
}

class VehiclesRegister extends LitElement {
  constructor() {
    super();
    this.brands = [];
  }
  static get properties() {
    return {
      brands: { type: Array} ,
    };
  }
  render(){
    return html`
    <div>
      <vaadin-combo-box
      label="Tipo de vehículo"
      item-label-path="name"
      item-value-path="id"
      id="tipo"
      .items="${["Carro", "Moto"]}"
      ></vaadin-combo-box>
    </div>

    <div>
      <vaadin-combo-box
      label="Marca"
      item-label-path="name"
      item-value-path="id"
      .items="${this.brands}"
      ></vaadin-combo-box>
    </div>

    <div>
      <vaadin-text-field label="Placa" placeholder="BRF 494"> </vaadin-text-field>
    </div>

    <div>
      <vaadin-text-field label="Línea" placeholder="Twingo"> </vaadin-text-field>
    </div>

    <div>
      <vaadin-text-field label="Modelo" placeholder="2004"> </vaadin-text-field>
    </div>

    <div>
      <vaadin-combo-box
      label="Documento del propietario"
      item-label-path="name"
      item-value-path="id"
      .items="${["1002633638"]}"
      ></vaadin-combo-box>
    </div>

    <vaadin-button theme="primary">Registrar</vaadin-button>
`;
  }
  firstUpdated() {
    super.firstUpdated()
    const tipo = this.renderRoot.querySelector('#tipo')
    tipo.addEventListener('change', (e) => {
      if (tipo.selectedItem) {
        this.brands = brands[tipo.selectedItem];
      }
    })
  }
}

customElements.define('vehicles-register', VehiclesRegister);

export default VehiclesRegister;
