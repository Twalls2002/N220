//Global Variables
let currentUser = null;
let tasks = [];

//Sample Users Data
const users = [
  { username: "user1", password: "Password1" },
  { username: "user2", password: "Password123" },
];

//Handle Login
function handleLogin(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  //Validation
  const user = users.find(
    (u) => u.username === username && u.password === password
  );

  if (user) {
    currentUser = user;
    showDashboard();
  } else {
    document.getElementById("login-error").innerText =
      "Invalid username or password.";
  }
}

//Show Dashboard
function showDashboard() {
  //Show Dashboard
  document.getElementById("login-form").style.display = "none";
  document.getElementById("dashboard").style.display = "block";
  document.getElementById("user-name").innerText = currentUser.username;

  //Load tasks
  loadTasks();
}

//Load Tasks
function loadTasks() {
  const taskList = document.getElementById("task-list");
  taskList.innerHTML = "";

  tasks
    .filter((task) => task.username === currentUser.username)
    .forEach((task) => {
      const li = document.createElement("li");
      li.classList.toggle("completed", task.completed);

      li.innerHTML = `
      <span>${task.text}</span>
      <div>
        <button onclick="toggleComplete('${task.id}')">${
        task.completed ? "Undo" : "Complete"
      }</button>
        <button onclick="editTask('${task.id}')">Edit</button>
        <button onclick="removeTask('${task.id}')">Delete</button>
      </div>
    `;

      taskList.appendChild(li);
    });
}

//Logout
function logout() {
  currentUser = null;
  tasks = [];
  document.getElementById("login-form").style.display = "block";
  document.getElementById("dashboard").style.display = "none";
  document.getElementById("login-error").innerText = "";
}

//Add Task
function addTask(event) {
  event.preventDefault();
  const taskText = document.getElementById("task-text").value;

  if (taskText.trim() === "") return;

  const newTask = {
    id: Date.now().toString(),
    text: taskText,
    completed: false,
    username: currentUser.username,
  };

  tasks.push(newTask);
  loadTasks();
  document.getElementById("task-text").value = "";
}

//Toggle Task Completion
function toggleComplete(taskId) {
  const task = tasks.find((t) => t.id === taskId);
  task.completed = !task.completed;
  loadTasks();
}

//Edit Task
function editTask(taskId) {
  const newText = prompt("Edit task:");
  if (newText) {
    const task = tasks.find((t) => t.id === taskId);
    task.text = newText;
    loadTasks();
  }
}

//Remove Task
function removeTask(taskId) {
  tasks = tasks.filter((t) => t.id !== taskId);
  loadTasks();
}
