export function burger() {
    //находим страницу у которой body содержит id blog
    if (document.getElementById('blog') != null) {
        //Находим кнопку бургер,меню и тело страницы
        const burger = document.querySelector('.header__burger');
        const menu = document.querySelector('.nav');
        const body = document.querySelector('body');

        //отслеживаем клик на элементе burger
        burger.addEventListener('click', () => {
            //При клике блокируем прокрутку страницы
            body.classList.toggle('lock');
            //меняем значoк бургера на крестик и обратно при клике
            if (burger.classList.contains('burger')) {
                burger.classList.remove('burger');
                burger.classList.add('burger-open');
            } else {
                burger.classList.remove('burger-open');
                burger.classList.add('burger');
            }
            //открываем/закрываем меню при клике
            if (menu.classList.contains('nav')) {
                menu.classList.remove('nav');
                menu.classList.add('nav__open');
            } else {
                menu.classList.add('nav');
                menu.classList.remove('nav__open');
            }
        });
    }
}