// Max Life App JS

// Tips array
const tips = [
  "Tip: Hydrate yourself to max your energy!",
  "Tip: Stretch in the morning for jaw and posture gains.",
  "Tip: Smile to increase confidence and social XP.",
  "Tip: Daily workout boosts Fitness XP.",
  "Tip: Read a chapter today to gain Knowledge XP."
];

// Tasks array (placeholders)
const tasks = [
  {name: "Jaw Exercise (Mewing)", tutorial: "Do this for 5 minutes.", video: "https://www.youtube.com/"},
  {name: "Quick Workout", tutorial: "10 pushups + 10 squats.", video: "https://www.youtube.com/"},
  {name: "Posture Check", tutorial: "Stand straight for 2 minutes.", video: "https://www.youtube.com/"},
  {name: "Style Boost", tutorial: "Dress sharp today.", video: "https://www.youtube.com/"},
  {name: "Confidence Task", tutorial: "Talk to someone new.", video: "https://www.youtube.com/"}
];

// Stats
let stats = {Jaw:0, Fitness:0, Style:0, Social:0, Confidence:0};

// Load saved progress
if(localStorage.getItem('stats')){
  stats = JSON.parse(localStorage.getItem('stats'));
}

// Random tip on home screen
function showRandomTip(){
  const tipEl = document.getElementById('random-tip');
  const randomTip = tips[Math.floor(Math.random()*tips.length)];
  tipEl.innerText = randomTip;
}

showRandomTip();

// Elements
const homeScreen = document.getElementById('home-screen');
const tasksScreen = document.getElementById('tasks-screen');
const statsScreen = document.getElementById('stats-screen');
const startBtn = document.getElementById('start-button');
const backHomeBtn = document.getElementById('back-home');
const backTasksBtn = document.getElementById('back-tasks');
const tasksList = document.getElementById('tasks-list');
const statsList = document.getElementById('stats-list');

// Start Maxing Now
startBtn.addEventListener('click', ()=>{
  homeScreen.style.display = 'none';
  tasksScreen.style.display = 'flex';
  renderTasks();
});

backHomeBtn.addEventListener('click', ()=>{
  tasksScreen.style.display = 'none';
  homeScreen.style.display = 'flex';
  showRandomTip();
});

backTasksBtn.addEventListener('click', ()=>{
  statsScreen.style.display = 'none';
  tasksScreen.style.display = 'flex';
});

// Render tasks
function renderTasks(){
  tasksList.innerHTML = '';
  tasks.forEach((task,index)=>{
    const li = document.createElement('li');
    li.innerHTML = `<strong>${task.name}</strong><br>${task.tutorial}<br><a href='${task.video}' target='_blank'>Watch Video</a>`;
    if(localStorage.getItem('task_'+index) === 'completed'){
      li.classList.add('completed');
    }
    li.addEventListener('click', ()=>{
      if(!li.classList.contains('completed')){
        li.classList.add('completed');
        // Add XP for stat
        let statKey = Object.keys(stats)[index % Object.keys(stats).length];
        stats[statKey] += 10; // Each task +10 XP
        localStorage.setItem('stats', JSON.stringify(stats));
        localStorage.setItem('task_'+index,'completed');
      }
    });
    tasksList.appendChild(li);
  });
}
