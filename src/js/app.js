import "../styles/style.scss";
import * as info from "./dataset.js";
const data = info.info;
const main = document.querySelector(".main_information");

console.log(main);

data.stock.forEach((el) => {
  console.log(el.title);
  let element = document.createElement("div");
  element.className = "product_card";
  element.innerHTML = el.title;
  main.appendChild(element);
});
