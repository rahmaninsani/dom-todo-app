import BaseElement from "./BaseElement.js";

export default class IconElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("i");
  }
}
