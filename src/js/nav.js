import * as info from "./dataset.js";

const arrow = document.querySelectorAll(".title_block");
const block = document.querySelectorAll(".block");

arrow.forEach((el) => {
  el.addEventListener("click", (event) => {
    block.forEach((el) => {
      el.classList.toggle("hidden");
    });
  });
});
