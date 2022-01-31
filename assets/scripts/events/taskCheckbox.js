const taskCheckbox = () => {
  const checkboxes = document.querySelectorAll("input[type=checkbox]");
  checkboxes.forEach((checkbox) => {
    checkbox.addEventListener("change", (event) => {
      const { checked, parentNode } = event.target;
      const spanTodo = parentNode.nextElementSibling.childNodes[0];
      const removeButton = parentNode.nextElementSibling.nextElementSibling.childNodes[0];

      if (checked) {
        spanTodo.classList.add("text-muted");
        spanTodo.innerHTML = `<del>${spanTodo.textContent}</del>`;
        removeButton.classList.add("d-none");
      } else {
        spanTodo.classList.remove("text-muted");
        spanTodo.innerHTML = spanTodo.textContent;
        removeButton.classList.remove("d-none");
      }
    });
  });
};

export default taskCheckbox;
