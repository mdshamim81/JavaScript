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
    let alltask = document.querySelector(".allTask");
    let sum = "";

    // currentTask.forEach(function (elem, idx) {
    //   sum += `<div class="task">
    //         <h5>${elem.task} <span class=${elem.imp}>imp</span></h5>
    //         <button id=${idx}>Mark as Completed!</button>
    //       </div>`;
    // });
    // 1. Task cards create karna
    currentTask.forEach(function (elem, idx) {
      sum += `<div class="task">
        <div class="task-info">
          <h5 class="task-title">
            ${elem.task}
            <span class="${elem.imp}">imp</span>
          </h5>

          <p class="task-details" style="display: none;">
            ${elem.details || "No details added."}
          </p>
        </div>

        <button class="complete-task" data-index="${idx}">
          Mark as Completed!
        </button>
      </div>`;
    });

    // 2. HTML page par show karna
    alltask.innerHTML = sum;
    // 3. Tasks localStorage mein save karna
    localStorage.setItem("currentTask", JSON.stringify(currentTask));

    //old code
    // document.querySelectorAll(".task button").forEach(function (btn) {
    //   btn.addEventListener("click", function () {
    //     currentTask.splice(btn.id, 1);

    //     renderTask();
    //     // location.reload();
    //   });
    // });
    // 4. Title par click karne se details show/hide
    //update
    document.querySelectorAll(".task-title").forEach(function (title) {
      title.addEventListener("click", function () {
        let details = title.nextElementSibling;

        if (details.style.display === "none") {
          details.style.display = "block";
        } else {
          details.style.display = "none";
        }
      });
    });
    // 5. Task complete karne par remove karna
    document.querySelectorAll(".complete-task").forEach(function (btn) {
      btn.addEventListener("click", function () {
        let index = Number(btn.dataset.index);

        currentTask.splice(index, 1);

        renderTask();
      });
    });
  }
  // 6. Page load hone par saved tasks render karna
  renderTask();
  // 7. Form ke elements select karna
  var form = document.querySelector(".addTask form");
  var taskInput = document.querySelector(".addTask form input");
  var taskDetailsInput = document.querySelector(".addTask form textarea");
  var taskCheckbox = document.querySelector(".addTask form #check");
  // 8. Naya task add karna
  form.addEventListener("submit", function (e) {
    e.preventDefault();
    if (taskInput.value.trim() === "") {
      alert("Please enter a task title!");
      return;
    }
    currentTask.push({
      task: taskInput.value.trim(),
      details: taskDetailsInput.value.trim(),
      imp: taskCheckbox.checked,
    });

    taskInput.value = "";
    taskDetailsInput.value = "";
    taskCheckbox.checked = false;
    renderTask();
  });

  // localStorage.clear()
}
todoList();

// var hours=Array.from({length:18},function(elem,idx){
//   return `${6+idx}:00 - ${7+idx}:00`

// })

// console.log(hours)

function dailyPlanner() {
  // LocalStorage se saved plans nikalne ke liye
  var dayPlanData = JSON.parse(localStorage.getItem("dayPlanData")) || {};

  var dayPlanner = document.querySelector(".day-planner");

  var hours = Array.from(
    { length: 18 },
    (_, idx) => `${6 + idx}:00 - ${7 + idx}:00`,
  );

  var wholeDaySum = "";
  hours.forEach(function (elem, idx) {
    var savedData = dayPlanData[idx] || "";
    wholeDaySum =
      wholeDaySum +
      `<div class="day-planner-time">
          <p>${elem}</p>
          <input id=${idx} type="text" placeholder="Enter Plan" value=${savedData}>
        </div>`;
  });

  dayPlanner.innerHTML = wholeDaySum;
  // Saare planner inputs select karo
  var dayPlannerInput = document.querySelectorAll(".day-planner input");
  // Har input mein changes hone par data save karo
  dayPlannerInput.forEach(function (elem) {
    elem.addEventListener("input", function () {
      console.log("hello");

      dayPlanData[elem.id] = elem.value;
      // Updated data LocalStorage mein save karo
      localStorage.setItem("dayPlanData", JSON.stringify(dayPlanData));
    });
  });
}
dailyPlanner();

//check api
// async function fetchQuote(){
//   let response=await fetch('https://dummyjson.com/quotes/random')
//   console.log(await response.json());

// }
// fetchQuote()

function motivationalQuoteContent() {
  var motivationQuote = document.querySelector(".motivation-2 h1");
  var motivationAuthor = document.querySelector(".motivation-3 h2");

  async function fetchQuote() {
    let response = await fetch("https://dummyjson.com/quotes/random");
    let data = await response.json();
    motivationQuote.innerHTML = data.quote;
    motivationAuthor.innerHTML = data.author;
  }
  fetchQuote();
}

motivationalQuoteContent ()