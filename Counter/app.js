let count = 0;

const value = document.getElementById("value");
value.textContent = count;

// Decrement
const decrease = document.querySelector(".decrease");
decrease.addEventListener("click", () => {
  count -= 1;

  if (count < 0) {
    value.style.color = "red";
  }
  // update value
  return (value.textContent = count);
});
