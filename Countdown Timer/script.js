const newYears = "1 Jan 2023";

function countdown() {
  const newYearsDate = new Date(newYears);
  const currentDate = new Date();

  const times = (newYearsDate - currentDate) / 1000;

  const days = Math.floor(times / 3600 / 24);
  const hours = Math.floor(times / 3600) % 24;
  const minutes = Math.floor(times / 60) % 60;
  const seconds = Math.floor(times) % 60;

  document.getElementById("days").textContent = days;
  document.getElementById("hours").textContent = formatTime(hours);
  document.getElementById("minutes").textContent = formatTime(minutes);
  document.getElementById("seconds").textContent = formatTime(seconds);
}

function formatTime(time) {
  return time < 10 ? `0${time}` : time;
}

countdown();

setInterval(countdown, 1000);
