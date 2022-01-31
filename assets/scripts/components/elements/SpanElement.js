import BaseElement from "./BaseElement.js";

export default class SpanElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("span");
  }
}
