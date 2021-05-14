import * as info from "./dataset.js";

const data = info.info;
const main = document.querySelector(".main_information");

data.stock.forEach((el) => {
  const element = document.createElement("div");
  element.className = "product_card";
  const image = document.createElement("div");
  image.className = "image";
  const img = document.createElement("img");
  img.setAttribute(
    "src",
    `https://raw.githubusercontent.com/aleksey-drozdov/webm-test-data/main/src/images/${el.image}`
  );
  const price = document.createElement("div");
  price.className = "price";
  price.textContent = `${el.price} ${el.price_currency}`;

  const information = document.createElement("div");
  information.className = "information";
  const titleInfo = document.createElement("div");
  titleInfo.className = "title_info";
  const hr = document.createElement("hr");
  hr.className = "line";
  hr.setAttribute("width", "100%");
  const title = document.createElement("div");
  title.textContent = el.title;
  title.className = "title";
  const bodyInfo = document.createElement("div");
  bodyInfo.className = "body_info";
  const type = document.createElement("div");
  type.className = "text";
  type.textContent = el.type;
  const payload = document.createElement("span");
  payload.className = "info_in_radius";
  payload.textContent = `Payload: ${el.payload}`;
  const grossWeight = document.createElement("span");
  grossWeight.className = "info_in_radius";
  grossWeight.textContent = `Gross_weight: ${el.gross_weight}`;
  const footerInfo = document.createElement("div");
  footerInfo.className = "footer_info";
  const arr = [el.year, el.mileage, el.axle_configuration, el.power];

  main.appendChild(element);
  element.appendChild(image);
  element.appendChild(information);
  element.appendChild(price);
  image.appendChild(img);
  information.appendChild(titleInfo);
  information.appendChild(hr);
  information.appendChild(bodyInfo);
  information.appendChild(footerInfo);
  titleInfo.appendChild(title);
  bodyInfo.appendChild(type);
  bodyInfo.appendChild(payload);
  bodyInfo.appendChild(grossWeight);
  arr.forEach((el) => {
    let info = document.createElement("div");

    info.className = "info_in_border";
    if (arr[3] === el) {
      info.textContent = `${el} Hp`;
    } else {
      info.textContent = el;
    }
    footerInfo.appendChild(info);
  });
});
