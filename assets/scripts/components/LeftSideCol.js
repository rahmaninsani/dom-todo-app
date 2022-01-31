import { DivElement, LabelElement, InputElement, ButtonElement } from "../components/elements/index.js";
import { CardContainer, CardBody, CardFooter } from "../components/card/index.js";

const LeftSideCol = () => {
  // Instance of elements
  const leftSideCol = new DivElement();
  const contentRow = new DivElement();
  const contentCol = new DivElement();
  const label = new LabelElement();
  const input = new InputElement();
  const hiddenInput = new InputElement();
  const saveButton = new ButtonElement();
  const cancelButton = new ButtonElement();
  const updateButton = new ButtonElement();

  // Initialize card
  const cardContainer = CardContainer();
  const cardBody = CardBody();
  const cardFooterSave = CardFooter(null, ["text-center", "mt-2"]);
  const cardFooterUpdateCancel = CardFooter(null, ["text-center", "mt-3", "d-none"]);

  leftSideCol.addClass(["col-12", "col-md-6", "left-side"]);
  contentRow.addClass(["row", "justify-content-center", "align-items-center", "vh-100"]);

  contentCol.addClass(["col-10"]);

  label.addAttribute({ for: "newTodo", id: "new-todo-title" });
  label.addClass(["form-label"]);
  label.addTextContent("New Todo");

  input.addAttribute({ type: "text", id: "newTodo" });
  input.addClass(["form-control"]);

  hiddenInput.addAttribute({ type: "hidden", id: "taskId" });

  saveButton.addAttribute({ type: "submit", id: "save" });
  saveButton.addClass(["btn", "btn-primary"]);
  saveButton.addTextContent("Save");

  cancelButton.addAttribute({ id: "cancel" });
  cancelButton.addClass(["btn", "btn-danger", "me-2"]);
  cancelButton.addTextContent("Cancel");

  updateButton.addAttribute({ type: "submit", id: "update" });
  updateButton.addClass(["btn", "btn-success"]);
  updateButton.addTextContent("Update");

  cardBody.addChild([label, input, hiddenInput]);
  cardFooterSave.addChild([saveButton]);
  cardFooterUpdateCancel.addChild([cancelButton, updateButton]);
  cardContainer.addChild([cardBody, cardFooterSave, cardFooterUpdateCancel]);
  contentCol.addChild([cardContainer]);
  contentRow.addChild([contentCol]);
  leftSideCol.addChild([contentRow]);

  return leftSideCol;
};

export default LeftSideCol();
