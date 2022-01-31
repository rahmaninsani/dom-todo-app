import { DivElement } from "../elements/index.js";

const CardContainer = (attributes = null, classNames = null) => {
  const element = new DivElement();
  element.addClass(["card"]);

  if (attributes) {
    element.addAttribute(attributes);
  }

  if (classNames) {
    cardelementBody.addClass(classNames);
  }

  return element;
};

export default CardContainer;
