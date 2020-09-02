const burnButton = document.querySelector("button");
const negativity = document.getElementById("negative");
console.log(negativity);

burnButton.addEventListener("click", burn);

function burn() {
  negativity.classList.add("burning");
  setTimeout((negativity.value = ""), 2500);
  setTimeout(negativity.classList.remove("burning"), 5000);
}
