function onReady() {
  var toDos = [];
  var addToDoForm = document.getElementById('addToDoForm');

  function createNewToDo() {
    var newToDoText = document.getElementById('newToDoText');

    toDos.push({
      title: newToDoText.value,
      complete: false
    });
    newToDoText.value = '';

    renderTheUI(toDos);
  }

  function deleteTodo(toDo) {
    toDos = toDos.filter( (todo) => {
      return todo != toDo;
    });
    renderTheUI(toDos);
  }

  function renderTheUI(toDos) {
    var todoList = document.getElementById('toDoList');

    toDoList.innerHTML = '';

    toDos.forEach( (toDo) => {
      var newLi = document.createElement('li');
      var checkbox = document.createElement('input');
      checkbox.type = "checkbox";
      var deleteBtn = document.createElement('button');
      deleteBtn.textContent = "delete";

      newLi.innerHTML = toDo.title;

      todoList.appendChild(newLi);
      newLi.appendChild(checkbox);
      newLi.appendChild(deleteBtn);

      deleteBtn.addEventListener('click', () => {
        deleteTodo(toDo);
      });
    });
  }

  addToDoForm.addEventListener('submit', (event) => {
    event.preventDefault();
    createNewToDo();
  });

  renderTheUI(toDos);
}

window.onload = function() {
  onReady();
};
