// select elements
let input = document.querySelector("input");
let addBtn = document.querySelector(".add");
let tasks = document.querySelector(".tasks");
let delBtn = document.querySelector(".del");

// call functions on load page
window.addEventListener("load", function () {
  checkTask();
  addTask();
  removeTask();
});

// create function to check if task is in local storage
function checkTask() {
  if (localStorage.getItem("tasks")) {
    tasks.innerHTML = localStorage.getItem("tasks");
  }
}
  // add task
  function addTask() {
    input.focus();
    input.value = "";
    addBtn.addEventListener("click", () => {
      if (input.value !== "") {
        let newResult = document.createElement("div");
        let newTask = document.createElement("p");
        let delBtn = document.createElement("button");
        newResult.classList.add("result");
        newTask.classList.add("new-task");
        delBtn.classList.add("del");
        newTask.textContent = input.value;
        delBtn.textContent = "Remove";
        newResult.append(newTask, delBtn);
        tasks.prepend(newResult);
        // add to local storage
        localStorage.setItem("tasks", tasks.innerHTML);
      }
      input.value = "";
    });
  }
  // remove task in local storage and dom
  function removeTask() {
    tasks.addEventListener("click", (e) => {
      if (e.target.classList.contains("del")) {
        e.target.parentElement.remove();
        // update local storage
        localStorage.setItem("tasks", tasks.innerHTML);
      }
    });
  }

