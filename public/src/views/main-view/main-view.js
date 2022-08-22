import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';
import { observeState } from 'lit-element-state';

import { logOut } from '../../utils/Firebase/auth';

import '@vaadin/tabs';

import '../../components/main-layout/main-layout';

import '@vaadin/button';

import style from './main-view.css';
import appState from '../../utils/State/appState';
import logoUrl from './parquadero.png'
const render = () => html`
  <style>${style}</style>
  <main-layout>

    
    <div slot="side-content">
      <div >
        <img class="avatar" src="${logoUrl}"></img>
      </div>
      <vaadin-tabs orientation='vertical' id="main-nav">
        <vaadin-tab ?disabled=${!appState.parking}>
          <span class="material-icons">person</span>
          <span>Usuarios</span>
        </vaadin-tab>
        <vaadin-tab ?disabled=${!appState.parking}>
          <span class="material-icons">directions_car</span>
          <span>Vehículos</span>
        </vaadin-tab>
        <vaadin-tab ?disabled=${!appState.parking}>
          <span class="material-icons">login</span>
          <span>Registrar ingreso</span>
        </vaadin-tab>
        <vaadin-tab ?disabled=${!appState.parking}>
          <span class="material-icons">logout</span>
          <span>Registrar salida</span>
        </vaadin-tab>
      </vaadin-tabs>

      <vaadin-horizontal-layout theme="spacing" style="align-items: baseline">
      <vaadin-button @click="${logOut}">Logout
      <span class="material-icons"slot="prefix">
person_off
</span>
    </vaadin-button>
      </vaadin-horizontal-layout>
    </div>
    
    <slot slot="main-content"></slot>
  </main-layout>
`;

const navMenuChanged = ({ detail: { value } }) => {
  const routes = ['/users', '/vehicles', '/register/ingress', '/register/exit'];
  Router.go(routes[value]);
};

class MainView extends observeState(LitElement) {
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
