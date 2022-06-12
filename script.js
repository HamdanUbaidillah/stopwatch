const hour = document.querySelector(".hour");
const min = document.querySelector(".minute");
const sec = document.querySelector(".second");
const mili = document.querySelector(".mili");
const startBtn = document.querySelector(".start");
const stopBtn = document.querySelector(".stop");
const resetBtn = document.querySelector(".reset");
//
startBtn.addEventListener("click", start);
stopBtn.addEventListener("click", stop);
resetBtn.addEventListener("click", reset);
let ms = 0;
let second = 0;
let minute = 0;
let hours = 0;
// function
function start() {
  startBtn.disabled = true;
  startTimer = setInterval(() => {
    ms++;
    ms = ms < 10 ? "0" + ms : ms;
    mili.innerHTML = ms;
    // milisecond
    if (ms == 100) {
      ms = 0;
      mili.innerHTML = "00";
      second++;
      second = second < 10 ? "0" + second : second;
      sec.innerHTML = second;
    } //second
    else if (second == 60) {
      second = 0;
      sec.innerHTML = "00";
      minute++;
      minute = minute < 10 ? "0" + minute : minute;
      min.innerHTML = minute;
    } //minute
    else if (minute == 59) {
      minute = 0;
      min.innerHTML = "00";
      hours++;
      minute = 0;
      hours = hours < 10 ? "0" + hours : hours;
      hour.innerHTML = hours;
    }
  }, 10);
}

function stop() {
  startBtn.disabled = false;
  clearInterval(startTimer);
}

function reset() {
  ms = 0;
  second = 0;
  minute = 0;
  hours = 0;
  mili.innerHTML = "00";
  sec.innerHTML = "00";
  min.innerHTML = "00";
  hour.innerHTML = "00";
}
