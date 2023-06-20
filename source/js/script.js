let mainNav = document.querySelector('.main-nav');
let navButton = document.querySelector('.main-nav__toggle');

mainNav.classList.remove("main-nav--nojs");

navButton.onclick = function() {
  mainNav.classList.toggle('main-nav--opened');
  mainNav.classList.toggle('main-nav--closed');
};
