import BaseElement from "./BaseElement.js";

export default class ListElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("li");
  }
}
