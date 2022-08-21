import { LitElement, html } from 'lit';

import style from './main-layout.css';

const render = () => html`
  <style>${style}</style>
  <aside>
    <slot name="side-content"></slot>
  </aside>
  <main>
    <slot name="main-content"></slot>
  </main>
`;

class MainLayout extends LitElement {
  constructor() {
    super();
    this.render = render.bind(this);
  }
}

customElements.define('main-layout', MainLayout);

export default MainLayout;
