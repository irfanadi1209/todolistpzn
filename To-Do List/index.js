const taskList = ["Belajar JavaScript", "Belajar NodeJS", "Belajar React"];

const clearTodoList = () => {
  const tBody = document.getElementById("tBody");
  while (tBody.firstChild) {
    tBody.removeChild(tBody.firstChild);
  }
};

function removeTodoList(index) {
  taskList.splice(index, 1);
  displayTodoList();
}

const addTodoList = (index, todo) => {
  const tr = document.createElement("tr");

  const tdButton = document.createElement("td");
  tr.appendChild(tdButton);

  const buttonDone = document.createElement("input");
  buttonDone.type = "button";
  buttonDone.value = "Done";
  buttonDone.onclick = function () {
    removeTodoList(index);
  };
  tdButton.appendChild(buttonDone);

  const tdTodo = document.createElement("td");
  tdTodo.textContent = todo;
  tr.appendChild(tdTodo);

  const tBody = document.getElementById("tBody");
  tBody.appendChild(tr);
};

const displayTodoList = () => {
  clearTodoList();

  for (let index = 0; index < taskList.length; index++) {
    const todo = taskList[index];

    const searchText = document.getElementById("search").value.toLowerCase();

    if (todo.toLowerCase().includes(searchText)) {
      addTodoList(index, todo);
    }
  }
};

document.forms["taskform"].onsubmit = function () {
  event.preventDefault();

  const todo = document.forms["taskform"]["task"].value;
  taskList.push(todo);

  document.forms["taskform"].reset();

  displayTodoList();

  //testing with console
  console.log(taskList);
};

const searchInput = document.getElementById("search");
searchInput.onkeydown = function () {
  displayTodoList();
};
searchInput.onkeyup = function () {
  displayTodoList();
};

displayTodoList();
