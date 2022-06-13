// @ts-ignore
import {h, render} from "preact";

export class IconComponent extends HTMLElement {
  private _shadowRoot: ShadowRoot;
  name: string;

  constructor() {
    super();
    this._shadowRoot = this.attachShadow({ mode: "closed" });
    this.render();
  }

  private pathToSvg = "./img/feather-sprite.svg";

  get template() {
    return <svg
      width="24"
      height="24"
      fill="none"
      stroke="currentColor"
      stroke-width="2"
      stroke-linecap="round"
      stroke-linejoin="round"
    >
      <use href={`${this.pathToSvg}#${this.name}`} />
    </svg>;
  }

  connectedCallback() {
    IconComponent.observedAttributes.forEach((name) => {
      // implement typing
      this[name] = this.getAttribute(name);
    });

    this.render();
  }

  static get observedAttributes() { return ['name']; }

  attributeChangedCallback(name, oldValue, newValue) {
    this[name] = newValue;
    console.log('attribute changed: ', {name, oldValue, newValue});

    this.render();
  }

  render() {
    render(this.template, this._shadowRoot);
  }
}

customElements.define('vgn-icon', IconComponent);
