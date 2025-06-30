// Clock
function updateClock() {
  const clock = document.getElementById('clock');
  const now = new Date();
  let hours = now.getHours().toString().padStart(2, '0');
  let minutes = now.getMinutes().toString().padStart(2, '0');
  let seconds = now.getSeconds().toString().padStart(2, '0');
  clock.textContent = `${hours}:${minutes}:${seconds}`;
}
setInterval(updateClock, 1000);
updateClock();

// Stopwatch
let [hr, min, sec] = [0, 0, 0];
let timerDisplay = document.getElementById("display");
let interval = null;
let isRunning = false;

function stopwatch() {
  sec++;
  if (sec === 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }

  let h = hr.toString().padStart(2, '0');
  let m = min.toString().padStart(2, '0');
  let s = sec.toString().padStart(2, '0');

  timerDisplay.innerText = `${h}:${m}:${s}`;
}

function start() {
  if (!isRunning) {
    interval = setInterval(stopwatch, 1000);
    isRunning = true;
  }
}

function stop() {
  clearInterval(interval);
  isRunning = false;
}

function reset() {
  clearInterval(interval);
  [hr, min, sec] = [0, 0, 0];
  timerDisplay.innerText = "00:00:00";
  isRunning = false;
}
