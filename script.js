// Variables
const input = document.querySelector("form input");
const form = document.querySelector("form");
const clear = document.querySelector(".clear-button");
const ul = document.querySelector("ul");
const completed = document.querySelector(".complete-button");
const removeAll = document.querySelector(".refresh-button");
const buttonAll = document.querySelector(".show-all");
const buttonActive = document.querySelector(".show-active");
const buttonCompleted = document.querySelector(".show-completed");
const itemsLeft = document.querySelector(".items-left-number");

function updateItemsLeft() {
  itemsLeft.innerHTML = document.querySelectorAll("ul li:not(.checked)").length;
}

buttonAll.addEventListener("click", function() {
  buttonAll.classList.add("active");
  buttonActive.classList.remove("active");
  buttonCompleted.classList.remove("active");
  ul.classList.remove("only-active");
  ul.classList.remove("only-completed");
});

buttonActive.addEventListener("click", function() {
  buttonAll.classList.remove("active");
  buttonActive.classList.add("active");
  buttonCompleted.classList.remove("active");
  ul.classList.add("only-active");
  ul.classList.remove("only-completed");
});

buttonCompleted.addEventListener("click", function() {
  buttonAll.classList.remove("active");
  buttonActive.classList.remove("active");
  buttonCompleted.classList.add("active");
  ul.classList.remove("only-active");
  ul.classList.add("only-completed");
});

form.addEventListener("submit", function(event) {
  event.preventDefault();

  if (input.value === "") {
    alert("Please input value");
    return; // get the fuck outta here
  }

  // create li (doesn't exist on the page yet)
  const li = document.createElement("li");

  // create check button and add it to li
  const checkButton = document.createElement("button");
  checkButton.classList.add("check-button");
  checkButton.innerHTML = "&#10003;";
  li.appendChild(checkButton);

  // create delete button and add it to li
  const deleteButton = document.createElement("button");
  deleteButton.classList.add("delete-button");
  deleteButton.innerHTML = "&times;";
  li.appendChild(deleteButton);

  // create span and add it to li
  const span = document.createElement("span");
  span.innerHTML = input.value;
  li.appendChild(span);

  // add li to ul
  ul.appendChild(li);
  updateItemsLeft();

  deleteButton.addEventListener("click", function() {
    li.remove();
    updateItemsLeft();
  });

  checkButton.addEventListener("click", function() {
    li.classList.toggle("checked");
    updateItemsLeft();
  });

  input.value = "";
});

clear.addEventListener("click", function() {
  const allCompleted = document.querySelectorAll("li.checked");
  allCompleted.forEach(function(li) {
    li.remove();
  });
});
