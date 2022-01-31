import BaseElement from "./BaseElement.js";

export default class ButtonElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("button");
  }
}
