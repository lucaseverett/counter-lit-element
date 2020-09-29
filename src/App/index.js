import { LitElement, html, customElement } from "lit-element";
import styles from "./styles";
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
