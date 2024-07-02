const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

/// Function for adding the tasks.
function addTask() {
  if (inputBox.value == "") {
    alert("Can't be Empty , You must write something here !");
  } else {
    let li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);
    let span = document.createElement("span");
    span.innerHTML = "\u00d7";
    li.appendChild(span);
  }
  inputBox.value = "";
  saveData();
}

/// Function to check or delete the tasks.
listContainer.addEventListener(
  "click",
  function (e) {
    if (e.target.tagName === "LI") {
      e.target.classList.toggle("checked");
      saveData();
    } else if (e.target.tagName === "SPAN") {
      e.target.parentElement.remove();
      saveData();
    }
  },
  false
);
/// Function to toggle Menu with the hamburger menu.
function toggleMenu() {
    var navbar = document.getElementById("navbar");
    if (navbar.className === "header-right") {
      navbar.className += " responsive";
    } else {
      navbar.className = "header-right";
    }
  }

/// Function to save the data in local storage.
function saveData() {
  localStorage.setItem("data", listContainer.innerHTML);
}

/// Function to show the task i.e. stored in the local storage.
function showTask() {
  listContainer.innerHTML = localStorage.getItem("data");
}
showTask();
