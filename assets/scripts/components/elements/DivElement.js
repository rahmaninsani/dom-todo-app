import BaseElement from "./BaseElement.js";

export default class DivElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("div");
  }
}
