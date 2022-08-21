import { LitElement, html } from 'lit';

import '@vaadin/tabs';
import '@vaadin/icon';

import '../../components/main-layout/main-layout';

import style from './main-view.css';

const render = () => html`
  <style>${style}</style>
  <main-layout>
    <vaadin-tabs orientation='vertical' id="main-nav" slot="side-content">
      <vaadin-tab>
        <span class="material-icons">person</span>
        <span>Usuarios</span>
      </vaadin-tab>
      <vaadin-tab>
        <span class="material-icons">directions_car</span>
        <span>Vehiculos</span>
      </vaadin-tab>
      <vaadin-tab>
        <span class="material-icons">login</span>
        <span>Registrar ingreso</span>
      </vaadin-tab>
      <vaadin-tab>
        <span class="material-icons">logout</span>
        <span>Registrar salida</span>
      </vaadin-tab>
    </vaadin-tabs>
    
    <slot slot="main-content"></slot>
  </main-layout>
`;

const navMenuChanged = ({ detail: { value } }) => {
  const routes = ['users', 'vehicles', 'ingress', 'exit'];
  console.log(routes[value]);
};

class MainView extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
    this.navMenuChanged = navMenuChanged.bind(this);
  }

  updated() {
    super.updated();
    const mainNav = this.renderRoot.querySelector('#main-nav');
    mainNav.addEventListener('selected-changed', this.navMenuChanged);
  }
}

customElements.define('main-view', MainView);

export default MainView;
