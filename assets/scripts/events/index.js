import saveButton from "./saveButton.js";
import editButton from "./editButton.js";
import updateButton from "./updateButton.js";
import cancelButton from "./cancelButton.js";
import deleteButton from "./deleteButton.js";
import taskCheckbox from "./taskCheckbox.js";

const executeAllEventListener = () => {
  saveButton();
  editButton();
  updateButton();
  cancelButton();
  deleteButton();
  taskCheckbox();
};

export default executeAllEventListener;
