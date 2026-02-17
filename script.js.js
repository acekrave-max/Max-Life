// ========== CUSTOMIZE THIS ==========

// Random tips — edit these freely
const tips = [
  "Drink a glass of water every hour",
  "Take a short walk to refresh your mind",
  "Stretch for 5 minutes",
  "Write down 3 things you are grateful for",
  "Organize your desk or room"
];

// Daily tasks — edit these freely
const tasks = [
  "Meditate for 10 minutes",
  "Do 20 push-ups",
  "Read 30 pages",
  "Write in your journal",
  "Declutter your workspace"
];

// =====================================

// Elements
const startButton = document.getElementById('start-button');
const homeScreen = document.getElementById('home-screen');
const tasksScreen = document.getElementById('tasks-screen');
const backHome = document.getElementById('back-home');
const tasksList = document.getElementById('tasks-list');
const tipElement = document.getElementById('random-tip');

// Show a random tip on load
tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];

// Start button click
startButton.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  tasksScreen.style.display = 'block';
  tasksList.innerHTML = ""; // Clear old tasks
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    tasksList.appendChild(li);
  });
});

// Back home button click
backHome.addEventListener('click', () => {
  tasksScreen.style.display = 'none';
  homeScreen.style.display = 'flex';
  // Show a new random tip every time
  tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
});
