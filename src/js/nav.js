import * as info from "./dataset.js";
const navWrapper = document.querySelector(".nav_wrapper");
const textBlock = document.querySelector(".text_block");
console.log(textBlock);
const dataNav = info.info.nav;
const pageText = info.info.page_text;

dataNav.forEach((el) => {
  const link = document.createElement("div");
  link.textContent = el.text;
  link.setAttribute("href", el.href);
  link.className = "nav_link";
  navWrapper.appendChild(link);
});
pageText.forEach((el) => {
  const text = document.createElement(el.tag);
  text.textContent = el.content;
  text.className = "text_info";
  textBlock.appendChild(text);
});
