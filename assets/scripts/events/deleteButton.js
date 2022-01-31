const deleteButton = () => {
  const removeButtons = document.querySelectorAll(".remove-todo");
  removeButtons.forEach((removeButton) => {
    removeButton.addEventListener("click", (event) => {
      const { parentNode } = event.target;
      parentNode.parentNode.parentNode.remove();
    });
  });
};

export default deleteButton;
