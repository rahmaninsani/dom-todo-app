const editButton = () => {
  const editButtons = document.querySelectorAll(".edit-todo");
  editButtons.forEach((editButton) => {
    editButton.addEventListener("click", (event) => {
      const { parentNode } = event.target;
      const task = parentNode.previousElementSibling.childNodes[0];
      const id = parentNode.previousElementSibling.childNodes[1];

      const formTitle = document.getElementById("new-todo-title");
      const newTodo = document.getElementById("newTodo");
      const taskId = document.getElementById("taskId");
      const saveButton = document.getElementById("save");
      const updateButton = document.getElementById("update");

      formTitle.textContent = "Update Todo";
      newTodo.value = task.textContent;
      taskId.value = id.value;
      saveButton.parentNode.classList.add("d-none");
      updateButton.parentNode.classList.remove("d-none");
    });
  });
};
export default editButton;
