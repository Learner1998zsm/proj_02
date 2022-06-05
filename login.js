window.onload = function () {
  let title = document.querySelector("h1");
  let btn = document.querySelector("button");
  btn.addEventListener("click", function () {
    title.style.color = "pink";
  });
};
