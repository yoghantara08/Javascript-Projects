let count = 0;

const value = document.getElementById("value");
value.textContent = count;

// Decrement
const decrease = document.querySelector(".decrease");
decrease.addEventListener("click", () => {
  count--;

  if (count < 0) {
    value.style.color = "red";
  } else if (count == 0) {
    black();
  }
  // update value
  return (value.textContent = count);
});

// Increment
const increase = document.querySelector(".increase");
increase.addEventListener("click", () => {
  count++;

  if (count > 0) {
    value.style.color = "blue";
  } else if (count == 0) {
    black();
  }
  // update value
  return (value.textContent = count);
});

// Reset
const reset = document.querySelector(".reset");
reset.addEventListener("click", () => {
  count = 0;
  black();
  return (value.textContent = count);
});

function black() {
  value.style.color = "black";
}
