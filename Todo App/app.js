const inputBox = document.querySelector(".input-box input");
const inputBtn = document.querySelector(".input-box button");
const containerList = document.querySelector(".todo-box");

inputBox.onkeyup = () => {
  let userData = inputBox.value;
  if (userData.trim() != 0) {
    inputBtn.classList.add("active");
  } else {
    inputBtn.classList.remove("active");
  }
};

showTodoList();

inputBtn.addEventListener("click", () => {
  let userData = inputBox.value;

  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    storageArr = [];
  } else {
    storageArr = JSON.parse(getLocalStorage);
  }

  storageArr.push(userData); // push inputan user kedalam storage sa
  localStorage.setItem("New Todo", JSON.stringify(storageArr));
  showTodoList();
});

// Tambah Todo List didalam ul
function showTodoList() {
  let getLocalStorage = localStorage.getItem("New Todo");
  if (getLocalStorage == null) {
    storageArr = []; // buat blank array
  } else {
    storageArr = JSON.parse(getLocalStorage); // transforming json string into js object
  }

  let newLi = "";
  storageArr.forEach((element, index) => {
    newLi += `<li>${element}<span onclick="deleteList(${index})"; ><i class="fa-solid fa-trash"></i></span></li>`;
  });
  containerList.innerHTML = newLi;
  inputBox.value = "";
}
