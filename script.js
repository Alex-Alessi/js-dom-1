const button = document.getElementById("button");
const accesa = document.getElementById("accesa");
const spenta = document.getElementById("spenta");

button.addEventListener("click", () => {
  spenta.style.display = "none";
  accesa.style.display = "block";
});
