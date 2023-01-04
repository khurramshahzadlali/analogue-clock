const hourEl = document.querySelector(".hour");
const minutesEl = document.querySelector(".minutes");
const secondsEl = document.querySelector(".seconds");
const dateEl = document.querySelector(".date");

function updateClock() {
  const currentDate = new Date();
  setTimeout(updateClock, 1000);
  const hour = currentDate.getHours();
  const minutes = currentDate.getMinutes();
  const seconds = currentDate.getSeconds();
  const hourDeg = (hour / 12) * 360;
  hourEl.style.transform = `rotate(${hourDeg}deg)`;
  const minutesDeg = (minutes / 60) * 360;
  minutesEl.style.transform = `rotate(${minutesDeg}deg)`;
  const secondsDeg = (seconds / 60) * 360;
  secondsEl.style.transform = `rotate(${secondsDeg}deg)`;
}

updateClock();
currentDate = new Date().toDateString();
dateEl.innerText = currentDate;
