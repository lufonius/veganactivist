// @ts-ignore
import styles from 'bundle-text:./shell.scss';
import {Component, h, render} from "preact";

export class ShellComponent extends HTMLElement {
  private _shadowRoot: ShadowRoot;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this.render();
  }

  private name = "menu";

  private klick() {
    console.log("click");
    this.name = "x";
    this.render();
  }

  get template() {
    return (<div>
        <style>{styles}</style>

        <vgn-icon name={this.name} />
        <button onClick={() => this.klick()}>hello</button>

        <slot />
    </div>);
  }

  private render() {
    console.log("render");

    console.log(this.template);
    render(this.template, this._shadowRoot);
  }
}

customElements.define('vgn-shell', ShellComponent);
