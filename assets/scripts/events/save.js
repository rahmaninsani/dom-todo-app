import List from "../components/List.js";

const save = () => {
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", () => {
    const newTodo = document.getElementById("newTodo");

    if (!newTodo.value.trim()) {
      alert("Please Fill The Field");
      return;
    }

    const todoList = document.querySelector("ul.list-group.list-group-flush");
    const newTodoList = List(newTodo.value);

    todoList.appendChild(newTodoList.element);
    document.getElementById("newTodo").value = "";
  });
};
export default save;
