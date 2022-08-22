import { LitElement, html } from 'lit';
import '@vaadin/combo-box';
import '@vaadin/button';
import '@vaadin/horizontal-layout';
import '@vaadin/vertical-layout';

import '../content-layout/content-layout';
import style from './register-ingress.css';

const render = () => html`
<style>${style}</style>
<div class="container">
  <h1>REGISTRAR INGRESO</h1>

  <vaadin-vertical-layout>
  <vaadin-combo-box
  label="Placa vehículo"
  item-label-path="name"
  item-value-path="id"
  .items="${['BRF 494', 'OOC 55E']}"
></vaadin-combo-box>

<vaadin-horizontal-layout theme="spacing"
          style="flex-wrap: wrap; justify-content: flex-end;">
<vaadin-button theme="secondary">Cancelar</vaadin-button>
    <vaadin-button theme="primary">Registrar</vaadin-button>
  </vaadin-horizontal-layout>

  </vaadin-vertical-layout>
  </div>
`;

class RegisterIngress extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('register-ingress', RegisterIngress);

export default RegisterIngress;
