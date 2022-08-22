import { LitElement, html } from 'lit';
import '@vaadin/text-field';
import '@vaadin/combo-box';
import '@vaadin/email-field';
import '@vaadin/date-picker';
import '@vaadin/form-layout';
import '@vaadin/button';
import '@vaadin/icon';

import style from './users-register.css';

const render = () => html`
  <style>${style}</style>
  <div class="container">
  <h2>REGISTRO DE USUARIOS</h2>
  <vaadin-form-layout>
  <vaadin-text-field
  label="Nombre Propietario"
  required
  error-message="Este campo es obligatorio"
></vaadin-text-field>

<vaadin-combo-box
  label="Tipo de documento"
  item-label-path="name"
  item-value-path="id"
  .items="${['Cédula', 'Tarjeta de Identidad']}"
></vaadin-combo-box>

<vaadin-text-field
  label="Identificación Propietario"
  required
  error-message="Este campo es obligatorio"
></vaadin-text-field>

<vaadin-text-field
  label="Teléfono"
  required
  error-message="Este campo es obligatorio"
></vaadin-text-field>

<vaadin-text-field
  label="Dirección"
></vaadin-text-field>

<vaadin-email-field label="Correo electrónico"></vaadin-email-field>

<vaadin-combo-box
  label="Tipo de membresia"
  item-label-path="name"
  item-value-path="id"
  .items="${['Diurna', 'Nocturna', 'Premium']}"
></vaadin-combo-box>

<vaadin-date-picker label="Fecha de vencimiento"></vaadin-date-picker>
</vaadin-form-layout>

<vaadin-button>
  Siguiente
  <span class="material-icons" slot="suffix">
navigate_next
</span>
</vaadin-button>
  </div>
`;

class UsersRegister extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}


customElements.define('users-register', UsersRegister);

export default UsersRegister;
