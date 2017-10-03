function onReady() {
  const addToDoForm = document.getElementById('addToDoForm');
  const newToDoText = document.getElementById('newToDoText');
  const toDoList = document.getElementById('toDoList');

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();

    let title = newToDoText.value;

    let newLi = document.createElement('li');

    let checkbox = document.createElement('input');

    let deleteBtn = document.createElement('button');

    checkbox.type = "checkbox";

    deleteBtn.textContent = "delete";

    newLi.textContent = title;

    toDoList.appendChild(newLi);

    newLi.appendChild(checkbox);

    newLi.appendChild(deleteBtn);

    newToDoText.value = '';

    deleteBtn.addEventListener('click', () => {
      toDoList.removeChild(newLi);
    });
  });
}

window.onload = function() {
  onReady();
};
