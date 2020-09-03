const burnButton = document.querySelector("button");
const negativity = document.getElementById("negative");

burnButton.addEventListener("click", burn);

function burn() {
  negativity.className = "burning";
  setTimeout((negativity.value = ""), 2.5);
}
