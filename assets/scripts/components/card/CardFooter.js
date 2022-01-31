import { DivElement } from "../elements/index.js";

const CardFooter = (attributes = null, classNames = null) => {
  const element = new DivElement();
  element.addClass(["card-footer"]);

  if (attributes) {
    element.addAttribute(attributes);
  }

  if (classNames) {
    element.addClass(classNames);
  }

  return element;
};

export default CardFooter;
