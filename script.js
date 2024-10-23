const button = document.getElementById("change-image");
const accesa = document.getElementById("accesa");
const spenta = document.getElementById("spenta");
let valAccesa = false;

button.addEventListener("click", () => {
  if (!valAccesa) {
    // spenta.classList.add("d-block");
    accesa.classList.remove("d-none");
    spenta.classList.add("d-none");
    valAccesa = true;
  } else {
    spenta.classList.remove("d-none");
    accesa.classList.add("d-none");
    valAccesa = false;
    // accesa.classList.add("d-block");
  }
});
