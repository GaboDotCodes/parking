import { LitElement, html } from 'lit';

import { Router } from '@vaadin/router';

import { signInWithGoogle } from '../../utils/Firebase/auth';

import '../../components/main-layout/main-layout';

import style from './login-view.css';

const render = () => html`
  <style>${style}</style>
  <main-layout>
    <div slot="side-content">
      <h1>LOGIN</h1>
      <button @click="${() => signInWithGoogle(() => Router.go('/'))}">LOGIN WITH GOOGLE</button>
    </div>
    
    <div slot="main-content">
      <h1>SUPER PROGRAMA</h1>
    </div>
  </main-layout>
`;

class LoginView extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('login-view', LoginView);

export default LoginView;
