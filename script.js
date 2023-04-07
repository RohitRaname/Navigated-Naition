"use strict";

// querySelector return the live element
const nav = document.querySelector(".nav");
const navList = document.querySelector(".nav__list");
const navOverlay = document.querySelector(".nav__overlay");

function contains(target, className) {
  return target.classList.contains(className);
}

nav.addEventListener("click", (e) => {
  e.preventDefault();
  const target = e.target;
  if (contains(target, "nav__btn") || contains(target, "nav__link"))
    nav.classList.toggle("nav__open");

  if (contains(target, "nav__link")) {
    const id = target.getAttribute("href");

    const section = document.querySelector(`${id}`);
    const top = +section.offsetTop;
    // console.log(id,section)
    // setTimeout(() => section.scrollIntoView({ behavior: "smooth" }), 430);
    setTimeout(() => window.scrollTo({ top, behavior: "smooth" }), 430);
  }
});

function setTransition() {
  [...document.querySelectorAll(".waitload")].forEach((el) =>
    el.classList.remove("waitload")
  );
}
window.addEventListener("DOMContentLoaded", setTransition);
