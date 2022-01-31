import { DivElement } from "../elements/index.js";

const CardBody = (attributes = null, classNames = null) => {
  const element = new DivElement();
  element.addClass(["card-body"]);

  if (attributes) {
    element.addAttribute(attributes);
  }

  if (classNames) {
    cardelementBody.addClass(classNames);
  }

  return element;
};

export default CardBody;
