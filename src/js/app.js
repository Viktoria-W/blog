import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();

const burger = document.querySelector(".header__toggle");

document.querySelector('.header__menu-burger').addEventListener('click', function() {
    document.querySelector('.header__nav').classList.toggle('active');
    document.querySelector('body').classList.toggle('lock');
    //document.querySelector('.header__toggle').classList.remove('burger-close');
    //document.querySelector('.header__toggle').classList.toggle('burger-open');
        if (burger.classList.contains('burger-close')) {
            burger.classList.remove('burger-close');
            burger.classList.toggle('burger-open');
        } else if (burger.classList.contains('burger-open')) {
            burger.classList.remove('burger-open');
            burger.classList.toggle('burger-close');
        }
});
