const cancelButton = () => {
  const cancelButton = document.getElementById("cancel");
  cancelButton.addEventListener("click", () => {
    const formTitle = document.getElementById("new-todo-title");
    const newTodo = document.getElementById("newTodo");
    const saveButton = document.getElementById("save");
    const updateButton = document.getElementById("update");

    formTitle.textContent = "New Todo";
    newTodo.value = "";
    updateButton.parentNode.classList.add("d-none");
    saveButton.parentNode.classList.remove("d-none");
  });
};

export default cancelButton;
