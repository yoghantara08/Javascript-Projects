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
  document.getElementById("hours").textContent = hours;
  document.getElementById("minutes").textContent = minutes;
  document.getElementById("seconds").textContent = seconds;
}

countdown();

setInterval(countdown, 1000);
