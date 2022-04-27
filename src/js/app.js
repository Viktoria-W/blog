import * as flsFunctions from "./modules/functions.js";

flsFunctions.isWebp();


//Находим кнопку бургер,меню и тело страницы
const burger = document.querySelector('.header__burger');
const menu = document.querySelector('.nav');
const body = document.querySelector('body');


burger.addEventListener('click', () => {
    //При клике блокируем прокрутку страницы
    body.classList.toggle('lock');
    //меняем бургер на крестик
    if (burger.classList.contains('burger')) {
        burger.classList.remove('burger');
        burger.classList.add('burger-open');
    } else {
        burger.classList.remove('burger-open');
        burger.classList.add('burger');
    }
    //открываем меню 
    if (menu.classList.contains('nav')) {
        menu.classList.remove('nav');
        menu.classList.add('nav__open');
    } else {
        menu.classList.add('nav');
        menu.classList.remove('nav__open');
    }
});

//находим выбранное меню на index
const menuSelected = document.querySelector('.main__nav-link-selected');
const mainMenu = document.querySelector('.main__nav-list');
//при нажатии убираем класс selected
mainMenu.addEventListener('keydown', () => {
    if (menuSelected.classList.contains('main__nav-link-selected')) {
        menuSelected.classList.toggle('main__nav-link-selected');
    }
});
