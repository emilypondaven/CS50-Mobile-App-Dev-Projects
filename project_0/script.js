// Start local server
// python -m http.server
// http://localhost:8000

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

fetch('data.json')
    .then((response) => response.json())
    .then((data) => {
      itemCountSpan.innerHTML = data['item count'];
      uncheckedCountSpan.innerHTML = data['unchecked count'];
    });

function newTodo() {
  // Ask user to input the task
  let newTask = prompt("Please enter your next task below");

  // Empty input exception
  if (newTask == "") {
    alert("No task inputted");
  } else {
    addTodo(newTask);
  }
}

function addText(text) {
  var span = document.createElement("span")
  span.setAttribute("class", classNames["TODO_TEXT"]);
  span.innerText = text;
  return span;
}

function addCheckbox(id) {
  var input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("class", classNames['TODO_CHECKBOX']);
  input.setAttribute("id", "checkbox" + id);
  console.log("checkbox" + id);
  input.addEventListener("change", function() {
    if (this.checked) {
      uncheckedCountSpan.innerHTML--;
    } else {
      uncheckedCountSpan.innerHTML++;
    }
  });

  return input;
}

function addDeleteButton(id) {
  var button = document.createElement("button");
  button.setAttribute("class", classNames['TODO_DELETE']);
  button.innerHTML = "delete";
  button.addEventListener("click", function() {
    itemCountSpan.innerHTML--;
    // Get whether checkbox is checked
    var checked = document.getElementById("checkbox" + id).checked
    if (!checked) {
      uncheckedCountSpan.innerHTML--;
    }

    list.removeChild(document.getElementById(id));
  });

  return button;

}

function addTodo(text) {
  var li = document.createElement("li")
  li.setAttribute("class", classNames["TODO_ITEM"]);
  li.setAttribute("id", itemCountSpan.innerHTML);

  li.appendChild(addCheckbox(li.id));
  li.appendChild(addText(text));
  li.append(addDeleteButton(li.id));

  list.appendChild(li);
 
  itemCountSpan.innerHTML++;
  uncheckedCountSpan.innerHTML++;
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