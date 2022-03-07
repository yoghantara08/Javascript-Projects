const inputBox = document.querySelector(".input-box input");
const inputBtn = document.querySelector(".input-box button");
const containerList = document.querySelector(".todo-box");
const clearAllBtn = document.querySelector(".footer button");

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

  // isi value list pending
  const listPending = document.querySelector(".pending");
  listPending.textContent = storageArr.length;

  // clear all button active
  if (storageArr.length > 0) {
    clearAllBtn.classList.add("active");
  } else {
    clearAllBtn.classList.remove("active");
  }

  let newLi = "";
  storageArr.forEach((element, index) => {
    newLi += `<li>${element}<span onclick="deleteList(${index})"; ><i class="fa-solid fa-trash"></i></span></li>`;
  });
  containerList.innerHTML = newLi;
  inputBox.value = "";
}

// remove Todo List
function deleteList(index) {
  let getLocalStorage = localStorage.getItem("New Todo");
  storageArr = JSON.parse(getLocalStorage);
  storageArr.splice(index, 1);

  // update local storage
  localStorage.setItem("New Todo", JSON.stringify(storageArr));
  showTodoList();
}

// clear all todo list
clearAllBtn.addEventListener("click", () => {
  storageArr = []; // kosongkan array

  // update local storage
  localStorage.setItem("New Todo", JSON.stringify(storageArr));
  showTodoList();
});
