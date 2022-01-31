import BaseElement from "./BaseElement.js";

export default class InputElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("input");
  }
}
