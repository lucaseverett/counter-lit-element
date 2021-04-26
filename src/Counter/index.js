import { LitElement, html } from "lit";
import { customElement, property } from "lit/decorators.js";
import styles from "./styles.js";

@customElement("lit-counter")
class Counter extends LitElement {
  @property() count = 0;

  inc() {
    this.count += 1;
  }

  dec() {
    if (this.count !== 0) this.count -= 1;
  }

  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class=${styles}>
      <button @click=${this.dec} class="dec">-</button>
      <span class="count">${this.count}</span>
      <button @click=${this.inc} class="inc">+</button>
    </div>`;
  }
}
