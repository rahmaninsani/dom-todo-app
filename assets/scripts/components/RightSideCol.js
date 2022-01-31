import { DivElement, UnorderedListElement } from "../components/elements/index.js";
import { CardContainer, CardBody } from "../components/card/index.js";
import List from "./List.js";

import todoListModel from "../models/todo-list-model.js";

const RightSideCol = () => {
  // Instance of elements
  const rightSideCol = new DivElement();
  const contentRow = new DivElement();
  const contentCol = new DivElement();
  const ul = new UnorderedListElement();

  // Initialize card
  const cardContainer = CardContainer();
  const cardBody = CardBody();

  rightSideCol.addClass(["col-12", "col-md-6", "right-side"]);

  contentRow.addClass(["row", "justify-content-center", "align-items-center", "vh-100"]);
  contentCol.addClass(["col-10", "h-75", "d-flex", "align-items-center"]);

  cardContainer.addClass(["w-100", "mh-100", "overflow-auto"]);

  ul.addClass(["list-group", "list-group-flush"]);

  if (todoListModel.length > 1) {
    todoListModel.forEach(({ task }) => {
      const list = List(task);
      ul.addChild([list]);
    });
  }

  cardBody.addChild([ul]);
  cardContainer.addChild([cardBody]);
  contentCol.addChild([cardContainer]);
  contentRow.addChild([contentCol]);
  rightSideCol.addChild([contentRow]);

  return rightSideCol;
};

export default RightSideCol();
