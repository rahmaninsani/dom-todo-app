const updateButton = () => {
  const updateButton = document.getElementById("update");
  updateButton.addEventListener("click", () => {
    if (!document.getElementById("newTodo").value.trim()) {
      alert("Please Fill The Update Field");
      return;
    }

    const formTitle = document.getElementById("new-todo-title");
    const task = document.getElementById("newTodo").value;
    const taskId = document.getElementById("taskId").value;
    const saveButton = document.getElementById("save");
    const updateButton = document.getElementById("update");

    const todoList = document.querySelector("ul.list-group.list-group-flush");
    todoList.childNodes.forEach((child) => {
      if (taskId === child.childNodes[0].childNodes[1].childNodes[1].value) {
        child.childNodes[0].childNodes[1].childNodes[0].textContent = task;
      }
    });

    formTitle.textContent = "New Todo";
    document.getElementById("newTodo").value = "";
    saveButton.parentNode.classList.remove("d-none");
    updateButton.parentNode.classList.add("d-none");
  });
};

export default updateButton;
