import BaseElement from "./BaseElement.js";

export default class LabelElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("label");
  }
}
