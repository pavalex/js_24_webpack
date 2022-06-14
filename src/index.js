import {scroll} from './modules/scroll';
import {timer} from './modules/timer';
import {slider} from './modules/slider';
import {menu} from "./modules/menu";
import {tabs} from "./modules/tabs";
import {swiper} from "./modules/swiper";
import {modal} from "./modules/modal";
import {sendForm} from "./modules/sendForm";

scroll();
timer('20 june 2022');
slider();
menu();
tabs();
swiper();
modal();
sendForm('form1');
sendForm('form2');
sendForm('form3');