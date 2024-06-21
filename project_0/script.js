// Links any element I create in js with the associated CSS class name
// Affects how it looks
const classNames = {
  TODO_ITEM: 'todo-container',
  TODO_CHECKBOX: 'todo-checkbox',
  TODO_TEXT: 'todo-text',
  TODO_DELETE: 'todo-delete',
}

// A specific section of the website (HTML section)
const list = document.getElementById('todo-list')
const itemCountSpan = document.getElementById('item-count')
const uncheckedCountSpan = document.getElementById('unchecked-count')


function newTodo() {
  // Ask user to input the task
  let newTask = prompt("Please enter your next task below");

  // Empty input exception
  if (newTask == "") {
    alert("No task inputted")
  } else {
    addTodo(newTask)
  }
}

function addText(text) {

}

function deleteToDo(text) {

}

function addCheckbox(text) {

}

function addTodo(text) {
  
}


// NOTES:
// document.createElement(**tagname**) -> creates new HTML element
// document.getElementById() -> returns the element that has the id attribute
// element.innerHTML -> used to access current HTML

// Button click
/* let element = document.getElementById('addItem');
element.onclick = function() { 
  let newElement = document.createElement('li');
  document.getElementById('list').appendChild(newElement);
}; */