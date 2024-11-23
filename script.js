// Initializing variables
let timer;
let isRunning = false;
let seconds = 0;
let minutes = 0;
let hours = 0;

const timerDisplay = document.getElementById('timerDisplay');
const startBtn = document.getElementById('startBtn');
const pauseBtn = document.getElementById('pauseBtn');
const resetBtn = document.getElementById('resetBtn');

// Function to update the timer display
function updateDisplay() {
    timerDisplay.textContent = `${formatTime(hours)}:${formatTime(minutes)}:${formatTime(seconds)}`;
}

// Function to format time to always show two digits
function formatTime(time) {
    return time < 10 ? '0' + time : time;
}

// Function to start the timer
function startTimer() {
    isRunning = true;
    startBtn.disabled = true;
    pauseBtn.disabled = false;
    resetBtn.disabled = false;

    timer = setInterval(function () {
        seconds++;
        if (seconds === 60) {
            seconds = 0;
            minutes++;
        }
        if (minutes === 60) {
            minutes = 0;
            hours++;
        }
        updateDisplay();
    }, 1000);
}

// Function to pause the timer
function pauseTimer() {
    isRunning = false;
    clearInterval(timer);
    startBtn.disabled = false;
    pauseBtn.disabled = true;
}

// Function to reset the timer
function resetTimer() {
    isRunning = false;
    clearInterval(timer);
    seconds = 0;
    minutes = 0;
    hours = 0;
    updateDisplay();
    startBtn.disabled = false;
    pauseBtn.disabled = true;
    resetBtn.disabled = true;
}

// Event listeners for buttons
startBtn.addEventListener('click', startTimer);
pauseBtn.addEventListener('click', pauseTimer);
resetBtn.addEventListener('click', resetTimer);
