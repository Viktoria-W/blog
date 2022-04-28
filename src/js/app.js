'use strict'

//импортируем функцию проверки на изображения webp
import * as flsFunctions from "./modules/functions.js";

//импортируем функцию переключения выбранного меню на главной старнице
import { menuSelected } from "./modules/menu-selected.js";

//импортируем функцию работы бургера
import { burger } from "./modules/burger.js";


//вызов функци проверки на изобр webp
flsFunctions.isWebp();

//вызов функци основного меню навигации
menuSelected();

//вызов функци меню бургера
burger();







