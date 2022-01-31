import BaseElement from "./BaseElement.js";

export default class UnorderedListElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("ul");
  }
}
