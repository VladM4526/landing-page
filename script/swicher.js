const imagePreview = document.querySelector(".lp-swicher-ice-cream-img");
const colorPreview = document.querySelector(".lp-swicher-ice-cream-background");

function changeImage(any) {
  imagePreview.src = any;
}

function changeBgColor(any) {
  colorPreview.style.background = any;
}
