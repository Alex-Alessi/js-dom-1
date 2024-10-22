const button = document.getElementById("change-image");
const accesa = document.getElementById("accesa");
const spenta = document.getElementById("spenta");

button.addEventListener("click", () => {
  if (spenta.classList.contains("d-none")) {
    accesa.classList.remove("d-block");
    spenta.classList.remove("d-none");
  } else {
    spenta.classList.add("d-none");
    accesa.classList.add("d-block");
  }
});
