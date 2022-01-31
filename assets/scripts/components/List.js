import { DivElement, ListElement, InputElement, SpanElement, IconElement } from "../components/elements/index.js";

const List = ({ id, task, isDone }) => {
  // Instance of elements
  const list = new ListElement();
  const row = new DivElement();
  const firstCol = new DivElement();
  const secondCol = new DivElement();
  const thirdCol = new DivElement();
  const checkbox = new InputElement();
  const span = new SpanElement();
  const editIcon = new IconElement();
  const removeIcon = new IconElement();
  const input = new InputElement();

  list.addClass(["list-group-item"]);
  row.addClass(["row"]);

  firstCol.addClass(["col-6", "col-md-1", "d-flex", "align-items-center"]);
  checkbox.addAttribute({ type: "checkbox" });
  checkbox.addClass(["form-check-input"]);
  firstCol.addChild([checkbox]);

  secondCol.addClass(["col-12", "col-md-8", "d-flex", "align-items-center", "order-first", "order-md-1", "mb-4", "mb-md-0"]);
  span.addTextContent(task);
  input.addAttribute({ type: "hidden", value: id });
  secondCol.addChild([span, input]);

  thirdCol.addClass(["col-6", "col-md-3", "d-flex", "align-items-center", "justify-content-end", "order-last"]);
  editIcon.addClass(["bi", "bi-pencil-square", "btn", "btn-outline-primary", "me-1", "edit-todo"]);
  removeIcon.addClass(["bi", "bi-trash", "btn", "btn-outline-danger", "remove-todo"]);
  thirdCol.addChild([editIcon, removeIcon]);

  row.addChild([firstCol, secondCol, thirdCol]);
  list.addChild([row]);

  return list;
};

export default List;
