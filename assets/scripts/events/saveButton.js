import List from "../components/List.js";
import todoListModel from "../models/todo-list-model.js";

import editButton from "./editButton.js";

const saveButton = () => {
  const saveButton = document.getElementById("save");
  saveButton.addEventListener("click", () => {
    const newTodo = document.getElementById("newTodo");
    if (!newTodo.value.trim()) {
      alert("Please Fill The Field");
      return;
    }

    const todoList = document.querySelector("ul.list-group.list-group-flush");
    const newTodoList = List({ id: todoListModel.length + 1, task: newTodo.value, isDone: false });

    todoList.appendChild(newTodoList.element);
    document.getElementById("newTodo").value = "";
    editButton();
  });
};
export default saveButton;
