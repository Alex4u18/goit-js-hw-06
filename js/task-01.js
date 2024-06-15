const categories = document.querySelector("#categories");
const items = categories.querySelectorAll(".item");
console.log(`Number of categories: ${items.length}`);
items.forEach((item) => {
  const categoryTitle = item.querySelector("h2").textContent;
  console.log(`Category: ${categoryTitle}`);
  const elements = item.querySelectorAll("ul li");
  console.log(`Elements: ${elements.length}`);
});
