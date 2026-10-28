function openfeature() {
  var allElems = document.querySelectorAll(".elem");
  var fullElemPage = document.querySelectorAll(".fullElem");
  var fullElemPageBackBtn = document.querySelectorAll(".fullElem .back");

  allElems.forEach(function (elem) {
    elem.addEventListener("click", function () {
      fullElemPage[elem.id].style.display = "block";
    });
  });

  fullElemPageBackBtn.forEach(function (back) {
    back.addEventListener("click", function () {
      fullElemPage[back.id].style.display = "none";
    });
  });
}
openfeature();

function todoList() {
  var currentTask = [];
  if (localStorage.getItem("currentTask")) {
    currentTask = JSON.parse(localStorage.getItem("currentTask"));
  } else {
    console.log("Task list is empty");
  }

  function renderTask() {
    var alltask = document.querySelector(".allTask");
    var sum = "";

    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
            <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
            <button id=${idx}>Mark as Completed!</button>
          </div>`;
    });

    alltask.innerHTML = sum;

    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    document.querySelectorAll(".task button").forEach(function (btn) {
      btn.addEventListener("click", function () {
        currentTask.splice(btn.id, 1);

        renderTask();
        // location.reload();
      });
    });
  }
  renderTask();

  var form = document.querySelector(".addTask form");
  var taskInput = document.querySelector(".addTask form input");
  var taskDetailsInput = document.querySelector(".addTask form textarea");
  var taskCheckbox = document.querySelector(".addTask form #check");

  form.addEventListener("submit", function (e) {
    e.preventDefault();
    currentTask.push(
      {
        task: taskInput.value,
        details: taskDetailsInput.value,
        imp: taskCheckbox.checked,
      }
    );

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
    renderTask();

    
  });

  // localStorage.clear()
}
todoList();



