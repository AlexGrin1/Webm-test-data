import * as info from "./dataset.js";

const arrow = document.querySelectorAll(".title_block");

arrow.forEach((el) => {
  el.addEventListener("click", (event) => {
    console.log(event.target.classList.value);
    if (event.target.className === "arrow") {
      const block = el.querySelectorAll(".block");
      block.forEach((el) => {
        el.classList.toggle("hidden");
      });
    }
  });
});
