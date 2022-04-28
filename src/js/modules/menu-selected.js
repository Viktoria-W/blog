
export function menuSelected() {
    //находим страницу у которой body содержит id index
    if (document.getElementById('index') != null) {
        //находим выбранное меню навигации на index
        const menuSelected = document.querySelector('.main__nav-link-selected');
        const mainMenu = document.querySelector('.main__nav-list');

        //при нажатии на клавишу убираем класс selected
        mainMenu.addEventListener('keydown', () => {
            if (menuSelected.classList.contains('main__nav-link-selected')) {
                menuSelected.classList.toggle('main__nav-link-selected');
            }
        });
    }
}

