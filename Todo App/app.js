const inputBox = document.querySelector(".input-box input");
const inputBtn = document.querySelector(".input-box button");

inputBox.onkeyup = () => {
  let userData = inputBox.value; // user input value
  if (userData.trim() != 0) {
    inputBtn.classList.add("active");
  } else {
    inputBtn.classList.remove("active");
  }
};
