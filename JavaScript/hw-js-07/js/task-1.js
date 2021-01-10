"use strict";

const item = document.querySelectorAll(".item");
console.log(`У списку ${item.length} категорії.`);

item.forEach(el =>
  console.log(
    `категорія ${el.querySelector("h2").textContent}; Кількість елементів: ${
      el.children[1].children.length
    }`
  )
);
