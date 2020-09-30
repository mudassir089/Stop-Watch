var hourHeading = document.getElementById("hour");
var minHeading = document.getElementById("min");
var secHeading = document.getElementById("sec");
var msecHeading = document.getElementById("msec");

var buttonStart = document.getElementById("start");
var buttonPause = document.getElementById("pause");
var buttonReset = document.getElementById("reset");

var hour = 0;
var min = 0;
var sec = 0;
var msec = 0;

var interval = null;

function updateTimer() {
  msec++;
  if (msec >= 99) {
    sec++;
    msec = 0;
  }
  if (msec < 10) {
    msecHeading.innerHTML = "0" + msec;
  } else {
    msecHeading.innerHTML = msec;
  }

  if (sec >= 59) {
    min++;
    sec = 0;
  }
  if (sec < 10) {
    secHeading.innerHTML = "0" + sec;
  } else {
    secHeading.innerHTML = sec;
  }

  if (min >= 59) {
    hour++;
    min = 0;
  }
  if (min < 10) {
    minHeading.innerHTML = "0" + min;
  } else {
    minHeading.innerHTML = min;
  }

  if (hour < 10) {
    hourHeading.innerHTML = "0" + hour;
  } else {
    hourHeading.innerHTML = hour;
  }
}

buttonStart.onclick = function () {
  clearInterval(interval);
  interval = setInterval(updateTimer, 10);
};

buttonPause.onclick = function () {
  clearInterval(interval);
};

buttonReset.onclick = function () {
  hour = 0;
  min = 0;
  sec = 0;
  msec = 0;
  hourHeading.innerHTML = "0" + hour;
  minHeading.innerHTML = "0" + min;
  secHeading.innerHTML = "0" + sec;
  msecHeading.innerHTML = "0" + msec;
  clearInterval(interval);
};
