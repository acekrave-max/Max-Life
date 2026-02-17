// Elements
const startButton = document.getElementById('start-button');
const homeScreen = document.getElementById('home-screen');
const tasksScreen = document.getElementById('tasks-screen');
const backHome = document.getElementById('back-home');
const tasksList = document.getElementById('tasks-list');
const tipElement = document.getElementById('random-tip');

// Random tips
const tips = [
  "Drink water every hour!",
  "Take a 5-minute walk.",
  "Focus on one task at a time.",
  "Stretch to relax your body.",
  "Plan your next hour carefully."
];

// Daily tasks (5)
const tasks = [
  "Meditate for 10 minutes",
  "Do 20 push-ups",
  "Read 30 pages",
  "Write in your journal",
  "Organize your workspace"
];

// Show random tip on load
tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];

// Start button click
startButton.addEventListener('click', () => {
  homeScreen.style.display = 'none';
  tasksScreen.style.display = 'block';
  tasksList.innerHTML = ""; // Clear previous
  tasks.forEach(task => {
    const li = document.createElement('li');
    li.textContent = task;
    tasksList.appendChild(li);
  });
});

// Back home button
backHome.addEventListener('click', () => {
  tasksScreen.style.display = 'none';
  homeScreen.style.display = 'flex';
  // Show a new random tip each time
  tipElement.textContent = tips[Math.floor(Math.random() * tips.length)];
});
