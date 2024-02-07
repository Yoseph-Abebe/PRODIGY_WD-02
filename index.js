let buttons1 = document.getElementById("buttons1");
let buttons2 = document.getElementById("buttons2");
let start = document.getElementById("start");
let reset = document.getElementById("reset");
let pause = document.getElementById("pause");
let Lap = document.getElementById("Lap");
let list = document.getElementById("list");
let time = document.getElementById("time");
let count = 0;
let hr = 0,
  min = 0,
  sec = 0,
  mili = 0;
time.innerHTML = `0${hr}:0${min}:0${sec}:0${mili}`;

function Started() {
 
  mili++;
  if (mili === 100) {
    mili = 0;
    sec++;
  }
  if (sec == 60) {
    sec = 0;
    min++;
  }
  if (min === 60) {
    min = 0;
    hr++;
  }
  let getmili = mili,
    getsec = sec,
    getmin = min,
    gethr = hr;
  if (mili < 10) {
    getmili = `0${mili}`;
  }
  if (sec < 10) {
    getsec = `0${sec}`;
  }
  if (min < 10) {
    getmin = `0${min}`;
  }
  if (hr < 10) {
    gethr = `0${hr}`;
  }
  time.innerHTML = `${gethr}:${getmin}:${getsec}:${getmili}`;
}

let intervalId;
start.addEventListener("click", () => {
  buttons1.style.visibility = "hidden";
  buttons2.style.visibility = "visible";
  pause.innerHTML = `PAUSE`;
  pause.value = "pause";
  reset.innerHTML = `RESET`;
  intervalId = setInterval(Started, 10);
  Lap.innerHTML = `LAP`;
});
reset.addEventListener("click", () => {
  console.log("hi");
  hr = 0;
  sec = 0;
  min = 0;
  mili = 0;
  count = 0;
  time.innerHTML = `0${hr}:0${min}:0${sec}:0${mili}`;
  list.innerHTML = "";
  buttons2.style.visibility = "hidden";
  buttons1.style.visibility = "visible";
  clearInterval(intervalId);
});
pause.addEventListener("click", () => {
  if (pause.value === "pause") {
    pause.value = "resume";
    pause.innerHTML = `PLAY`;
    Lap.innerHTML = ``;
    clearInterval(intervalId);
  } else {
    pause.value = "pause";
    pause.innerHTML = `PAUSE`;
    Lap.innerHTML = `LAP`;
    intervalId = setInterval(Started, 10);
    console.log("pause");
  }
});
Lap.addEventListener("click", () => {
  if (pause.value === "pause") {
    count++;
    let getmili = mili,
      getsec = sec,
      getmin = min,
      gethr = hr,
      getcnt = count;
    if (mili < 10) {
      getmili = `0${mili}`;
    }
    if (sec < 10) {
      getsec = `0${sec}`;
    }
    if (min < 10) {
      getmin = `0${min}`;
    }
    if (hr < 10) {
      gethr = `0${hr}`;
    }
    if (count < 10) {
      getcnt = `0${count}`;
    }
    list.innerHTML =
      `<li>${getcnt}.   ${gethr}:${getmin}:${getsec}:${getmili}</li>` +
      list.innerHTML;
  }
});
