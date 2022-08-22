import { LitElement, html } from 'lit';

import '../content-layout/content-layout';

const render = () => html`
  <content-layout .items=${[
    { text: 'Registrar', icon: 'add_circle', link: '/vehicles/register' },
    { text: 'Consultar', icon: 'search', link: '/vehicles/search' },
  ]}>
    <slot></slot>
  </content-layout>
`;

class VehiclesLayout extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('vehicles-layout', VehiclesLayout);

export default VehiclesLayout;
