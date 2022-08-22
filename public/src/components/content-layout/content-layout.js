import { LitElement, html } from 'lit';
import { Router } from '@vaadin/router';

import style from './content-layout.css';

class ContentLayout extends LitElement {
  constructor() {
    super();
    this.items = [];
  }

  static get properties() {
    return {
      items: { type: Array },
    };
  }

  updated() {
    super.updated();
    const mainNav = this.renderRoot.querySelector('#main-nav');
    mainNav.addEventListener('selected-changed', ({ detail: { value } }) => {
      Router.go(this.items[value].link);
    });
  }

  render() {
    return html`
      <style>${style}</style>
      <vaadin-tabs orientation='horizontal' theme="centered" id="main-nav" ?hidden="${this.items.length === 0}">
        ${this.items.length !== 0
          && this.items.map(({ text, icon }) => html`
            <vaadin-tab theme=${icon && 'icon-on-top'}>
              <span class="material-icons" ?hidden=${!icon}>${icon}</span>
              <span>${text}</span>
            </vaadin-tab>
          `)}
      </vaadin-tabs>
      <main>
        <slot></slot>
      </main>
    `;
  }
}

customElements.define('content-layout', ContentLayout);

export default ContentLayout;
