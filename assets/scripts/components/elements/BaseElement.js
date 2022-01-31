export default class BaseElement {
  constructor() {
    if (this.constructor == BaseElement) {
      throw new Error("Abstract classes can't be instantiated.");
    }
  }

  addAttribute(attrs) {
    Object.keys(attrs).map((key) => {
      this.element.setAttribute(key, attrs[key]);
    });
  }

  addClass(classNames) {
    classNames.map((className) => {
      this.element.classList.add(className);
    });
  }

  addChild(elements) {
    elements.map((el) => {
      this.element.appendChild(el.element);
    });
  }

  addTextContent(text) {
    this.element.textContent = text;
  }

  addValue(value) {
    this.element.value = value;
  }
}
