import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import '@vaadin/text-field';
import '@vaadin/form-layout';
import '@vaadin/integer-field';
import '@vaadin/button';

import createParking from '../../utils/Services/Parkings/create-parking';
import appState from '../../utils/State/appState';

class InitialSetup extends LitElement {
  async formHandler() {
    const name = this.renderRoot.querySelector('#name').value;
    const direction = this.renderRoot.querySelector('#direction').value;
    const city = this.renderRoot.querySelector('#city').value;
    const phone = this.renderRoot.querySelector('#phone').value;

    const floorsInputs = this.renderRoot.querySelectorAll('.parking-floor-data');

    const floors = [...floorsInputs].map((floor) => ({
      floorId: floor.querySelector('#floor-id').value,
      carsPlaces: floor.querySelector('#cars-places').value,
      motorbikesPlaces: floor.querySelector('#motorbikes-places').value,
    }));

    const newParking = {
      name,
      direction,
      city,
      phone,
      floors,
    };

    const { response } = await createParking(newParking);
    appState.parking = response;
    Router.go('/');
  }

  render() {
    return html`
      <h1>CONFIGURACION INICIAL</h1>
      <vaadin-form-layout>
        <vaadin-text-field
          id="name"
          label="Nombre del parqueadero"
          placeholder="Parqueadero de Pablo"
          error-message="Este campo es requerido"
          required
        ></vaadin-text-field>
        <vaadin-text-field
          id="direction"
          label="Dirección"
          placeholder="Cra 21 #23-42"
        ></vaadin-text-field>
        <vaadin-text-field
          id="city"
          label="Ciudad"
          placeholder="Manizales"
          error-message="Este campo es requerido"
          required
        ></vaadin-text-field>
        <vaadin-text-field
          id="phone"
          pattern="^[3]{1}[0-9]{9}$"
          label="Número celular"
          helper-text="Format: 3012345678"
          required
        ></vaadin-text-field>
        
        <div class="parking-floor-data">
          <vaadin-text-field id="floor-id" label="Piso" placeholder="S1"></vaadin-text-field>
          <vaadin-integer-field id="cars-places" label="Plazas carros" has-controls value="0" min="0" max="999"></vaadin-integer-field>
          <vaadin-integer-field id="motorbikes-places" label="Plazas motos" has-controls value="0" min="0" max="999"></vaadin-integer-field>
        </div>

        <div class="parking-floor-data">
          <vaadin-text-field id="floor-id" label="Piso" placeholder="S1"></vaadin-text-field>
          <vaadin-integer-field id="cars-places" label="Plazas carros" has-controls value="0" min="0" max="999"></vaadin-integer-field>
          <vaadin-integer-field id="motorbikes-places" label="Plazas motos" has-controls value="0" min="0" max="999"></vaadin-integer-field>
        </div>
        <vaadin-button @click=${this.formHandler} theme="primary">Enviar</vaadin-button>
      </vaadin-form-layout>
  `;
  }
}

customElements.define('initial-setup', InitialSetup);

export default InitialSetup;
