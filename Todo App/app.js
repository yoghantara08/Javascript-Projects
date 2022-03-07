const inputBox = document.querySelector(".input-box input");
const inputBtn = document.querySelector(".input-box button");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    inputBtn.classList.add("active");
  } else {
    inputBtn.classList.remove("active");
  }
};

inputBtn.addEventListener("click", () => {
  let userData = inputBox.value;

  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    storageArr = [];
  } else {
    storageArr = JSON.parse(getLocalStorage);
  }

  storageArr.push(userData);
  localStorage.setItem("New Todo", JSON.stringify(storageArr));
});
