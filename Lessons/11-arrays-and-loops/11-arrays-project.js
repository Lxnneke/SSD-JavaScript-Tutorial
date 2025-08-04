let arrayOne = [];

function addOne() { 
  let practiceOne = document.querySelector(".practiceOne");
  arrayOne.push(practiceOne.value);
  console.log(arrayOne);

  practiceOne.value = "";
}

let todoList = [];
renderToDoList();

function renderToDoList() {
  let todoListHTML = "";

  for (let i = 0; i < todoList.length; i++) {
    const todo = todoList[i];
    const html = `<p>${todo}</p>`;
    todoListHTML += html;
  }
  
  document.querySelector(".todoListTwo").innerHTML = todoListHTML;
}

function addTwo() {
  todoList.push(document.querySelector(".practiceTwo").value);

  document.querySelector(".practiceTwo").value = "";
  renderToDoList();
}