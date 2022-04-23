// const request = new Request("https://api.ipify.org/?format=json", {
//   method: "GET",
// });

// fetch(request)
//   .then((res) => res.json())
//   .then((json) => {
//     const tempElement = document.createElement("h1");
//     const textNode = document.createTextNode(json.ip);
//     tempElement.appendChild(textNode);
//     ipContainer.appendChild(tempElement);
// });

const hrTimer = document.querySelector("#hr-timer");
const minTimer = document.querySelector("#min-timer");
const secTimer = document.querySelector("#sec-timer");

const timerStart = document.querySelector("#timer-start");
const timerReset = document.querySelector("#timer-reset");

let timerId;

const timer = () => {
  hrTimer.value = parseInt(hrTimer.value);
  minTimer.value = parseInt(minTimer.value);
  secTimer.value = parseInt(secTimer.value);
  if (hrTimer.value == 0 && minTimer.value == 0 && secTimer.value == 0) {
    hrTimer.value = 0;
    minTimer.value = 0;
    secTimer.value = 0;
  } else if (secTimer.value != 0) {
    secTimer.value--;
  } else if (minTimer.value != 0 && secTimer.value == 0) {
    secTimer.value = 59;
    minTimer.value--;
  } else if (hrTimer.value != 0 && minTimer.value == 0) {
    minTimer.value = 60;
    hrTimer.value--;
  }
};

timerStart.addEventListener("click", () => {
  console.log("TIMER START");
  timerId = setInterval(timer, 1000);
});

timerReset.addEventListener("click", () => {
  hrTimer.value = 0;
  minTimer.value = 0;
  secTimer.value = 0;
  console.log("TIMER RESET");
  clearInterval(timerId);
});

const hrStopWatch = document.querySelector("#hr-stop-watch");
const minStopWatch = document.querySelector("#min-stop-watch");
const secStopWatch = document.querySelector("#sec-stop-watch");

let stopWatchId;

const stopWatchStart = document.querySelector("#stop-watch-start");
const stopWatchStop = document.querySelector("#stop-watch-stop");
const resetWatchStop = document.querySelector("#stop-watch-reset");

const stopWatch = () => {
  if (secStopWatch.value != 60) {
    secStopWatch.value++;
  } else if (minStopWatch.value != 60 && secStopWatch.value == 60) {
    secStopWatch.value = 0;
    minStopWatch.value++;
  } else if (hrStopWatch.value != 60 && minStopWatch.value == 60) {
    minStopWatch.value = 0;
    hrStopWatch.value++;
  }
};

stopWatchStart.addEventListener("click", () => {
  console.log("STOP WATCH START");
  stopWatchId = setInterval(stopWatch, 1000);
});

stopWatchStop.addEventListener("click", () => {
  console.log("STOP WATCH STOP");
  clearInterval(stopWatchId);
});

resetWatchStop.addEventListener("click", () => {
  console.log("STOP WATCH RESET");
  clearInterval(stopWatchId);
  hrStopWatch.value = 0;
  minStopWatch.value = 0;
  secStopWatch.value = 0;
});
