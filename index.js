console.log("hello world");

const modal = document.querySelector(".navigation__nav");
const checkbox = document.querySelector(".navigation__checkbox");

modal.addEventListener("click", () => {
  console.log("clicked");
  checkbox.checked = false;
});
