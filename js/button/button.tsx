// @ts-ignore
import styles from 'bundle-text:./button.scss';
import {h, render} from "preact";

export class ButtonComponent extends HTMLElement {
  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: "closed" });
    render(this.template, shadowRoot);
  }

  private test: string = "test";

  get template() {
    return (<div>
      <style>{styles}</style>

      <h1 id="hoi" onClick={(el) => alert(el.clientY)}>{this.test}</h1>
    </div>);
  }
}

customElements.define('vgn-button', ButtonComponent);
