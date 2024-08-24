const open = document.getElementById("open");
const close = document.getElementById("close");
const slide = document.getElementById("slide");

if (open) {
  open.addEventListener("click", () => {
    slide.classList.add("active");
  });
}
if (close) {
  close.addEventListener("click", () => {
    slide.classList.remove("active");
  });
}
