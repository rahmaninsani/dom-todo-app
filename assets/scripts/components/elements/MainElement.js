import BaseElement from "./BaseElement.js";

export default class MainElement extends BaseElement {
  constructor() {
    super();
    this.element = document.createElement("main");
  }
}
