const container = document.querySelector(".container");
const panels = document.querySelectorAll(".panel");

container.addEventListener("click", (e) => {
  // cek jika panel berisi class active
  panels.forEach(function (panel) {
    if (panel.classList.contains("active")) {
      panel.classList.remove("active");
    }
  });

  // tambah class active pada panel yang di target
  e.target.classList.add("active");
});
