import BaseElement from "./BaseElement.js";

export default class SectionElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("section");
  }
}
