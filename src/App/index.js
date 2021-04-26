import { LitElement, html } from "lit";
import { customElement } from "lit/decorators.js";
import styles from "./styles.js";
import "../Counter";

@customElement("my-app")
class App extends LitElement {
  createRenderRoot() {
    return this;
  }

  render() {
    return html`<div class=${styles}>
      <lit-counter .count=${0}></lit-counter>
    </div>`;
  }
}
