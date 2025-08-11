let todoList = JSON.parse(localStorage.getItem('todoList')) || [{
    name: "Make dinner",
    dueDate: "10-10-2000"
  },
  {
    name: "Wash dishes",
    dueDate: "05-08-2025"
  }];

renderToDoList();

function renderToDoList() {
  let todoListHTML = "";

  todoList.forEach(function (toDoObject, index) {
    const { name, dueDate } = toDoObject;
    const html = `
    <div>${name}</div>
    <div>${dueDate}</div> 
    <button onclick="
      todoList.splice(${index}, 1);
      renderToDoList();
    " class="deleteBtn">Delete</button>`;
    todoListHTML += html;
  });

  // for (let i = 0; i < todoList.length; i++) {
  //   const toDoObject = todoList[i];
  //   //const toDoName = toDoObject.name;
  //   //const dueDate = toDoObject.dueDate;
  //   const { name, dueDate } = toDoObject;
  //   const html = `
  //   <div>${name}</div>
  //   <div>${dueDate}</div> 
  //   <button onclick="
  //     todoList.splice(${i}, 1);
  //     renderToDoList();
  //   " class="deleteBtn">Delete</button>`;
  //   todoListHTML += html;
  // }
  
  document.querySelector(".toDoListText").innerHTML = todoListHTML;
  saveToStorage();
}

function addAToDo() { 
  let toDoInput = document.querySelector(".todoInput");
  const name = toDoInput.value;

  const dateInput = document.querySelector(".todoDeadline");
  const dueDate = dateInput.value;

  todoList.push({
    name, 
    dueDate
  });


  toDoInput.value = "";
  renderToDoList();
}

function saveToStorage() {
  localStorage.setItem('todoList', JSON.stringify(todoList));
}