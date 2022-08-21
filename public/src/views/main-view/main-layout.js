import { LitElement, html } from 'lit';

import '@vaadin/tabs';
import '@vaadin/icon';

import style from './main-layout.css';

const render = () => html`
  <style>${style}</style>
  <aside>
    <nav>
      <vaadin-tabs orientation='vertical' id="main-nav" >
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
    </nav>
  </aside>
  <main>
    <slot></slot>
  </main>
`;

const navMenuChanged = ({ detail: { value } }) => {
  const routes = ['users', 'vehicles', 'ingress', 'exit'];
  console.log(routes[value]);
};

class MainLayout extends LitElement {
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

customElements.define('main-layout', MainLayout);

export default MainLayout;
