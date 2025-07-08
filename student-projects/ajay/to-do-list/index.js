const input = document.getElementById("task-input");
const addBtn = document.getElementById("add-btn");
const taskList = document.getElementById("task-list");
const taskCounter = document.getElementById("task-counter");

let taskCount = 0;

function updateCounter() {
  taskCounter.innerText = `You have ${taskCount} task(s) to complete`;
}

function addTask() {
  const taskText = input.value.trim();
  if (taskText === "") return alert("Enter a task!");

  const li = document.createElement("li");

  const label = document.createElement("span");
  label.textContent = taskText;

  const checkbox = document.createElement("input");
  checkbox.type = "checkbox";
  checkbox.addEventListener("change", () => {
    li.classList.toggle("completed");
    updateCounter();
  });

  const actions = document.createElement("div");
  actions.classList.add("actions");

  const editBtn = document.createElement("button");
  editBtn.innerHTML = "Edit";
  editBtn.classList.add("edit-btn");
  editBtn.onclick = () => {
    const newText = prompt("Edit your task:", label.textContent);
    if (newText !== null && newText.trim() !== "") {
      label.textContent = newText.trim();
    }
  };

  const deleteBtn = document.createElement("button");
  deleteBtn.innerHTML = "Delet";
  deleteBtn.classList.add("delete-btn");
  deleteBtn.onclick = () => {
    if (!li.classList.contains("completed")) taskCount--;
    li.remove();
    updateCounter();
  };

  actions.appendChild(editBtn);
  actions.appendChild(deleteBtn);

  li.appendChild(checkbox);
  li.appendChild(label);
  li.appendChild(actions);

  taskList.appendChild(li);
  input.value = "";
  taskCount++;
  updateCounter();
}

addBtn.addEventListener("click", addTask);
input.addEventListener("keypress", (e) => {
  if (e.key === "Enter") addTask();
});

updateCounter();
