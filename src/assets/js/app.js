import * as $ from "jquery";
import svg4everybody from "svg4everybody";

document.addEventListener("DOMContentLoaded", () => {
  svg4everybody();
});

const body = document.querySelector("body");
const login = document.getElementById("login");
const cross = document.getElementById("cross");
const formBg = document.querySelector(".form-bg");

login.onclick = function () {
  formBg.classList.add("form-bg--active");
  body.classList.add("block");
};
cross.onclick = function () {
  formBg.classList.remove("form-bg--active");
  body.classList.remove("block");
};
// E-mail Ajax Send
console.log($(".form"));
$(".form").submit(function () {
  // Change
  const th = $(this);
  $.ajax({
    type: "POST",
    url: "mail.php", // Change
    data: th.serialize(),
  }).done(() => {
    $(".thanks").addClass("show");
    $(".form").addClass("hidden");
    setTimeout(() => {
      // Done Functions
      th.trigger("reset");
    }, 1000);
  });
  return false;
});

const task = document.getElementById("task");
body.onmousemove = function (e) {
  if (
    e.pageY > getCoords(task).top
    && e.pageY < getCoords(task).top + task.offsetHeight
    && e.pageX > getCoords(task).left
    && e.pageX < getCoords(task).left + task.offsetWidth
  ) {
    body.style.cursor = "none";
    if (body.querySelector(".cursor-wrap")) {
      const cursorWrap = document.querySelector(".cursor-wrap");
      cursorWrap.style.left = `${e.pageX - cursorWrap.offsetWidth / 2}px`;
      cursorWrap.style.top = `${e.pageY - cursorWrap.offsetHeight / 2}px`;
      return false;
    }
    body.insertAdjacentHTML(
      "afterbegin",
      "<div class=\"cursor-wrap\"><div class=\"cursor-inner\"><img class=\"cursor-grab\" src=\"assets/img/icons/grab.png\" alt=\"grab\"></div></div>",
    );
    const cursorWrap = document.querySelector(".cursor-wrap");
    cursorWrap.style.left = `${e.pageX - cursorWrap.offsetWidth / 2}px`;
    cursorWrap.style.top = `${e.pageY - cursorWrap.offsetHeight / 2}px`;
  } else if (document.querySelector(".cursor-wrap")) {
    body.removeChild(document.querySelector(".cursor-wrap"));
    body.style.cursor = "auto";
  }
};
function getCoords(elem) {
  const box = elem.getBoundingClientRect();

  return {
    top: box.top + pageYOffset,
    left: box.left + pageXOffset,
  };
}
const burger = document.querySelector(".burger");
const menuHeader = document.querySelector(".header").querySelector(".menu");

burger.onclick = function () {
  this.classList.toggle("active");
  menuHeader.classList.toggle("active");
  body.classList.toggle("block");
};
