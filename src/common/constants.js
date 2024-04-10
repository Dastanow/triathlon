import arrowLeft from '../Assets/arrow-left.png';
import arrowPrev from '../Assets/arrow-prev.png';
import arrowNext from '../Assets/arrow-next.png';
import arrowRight from '../Assets/arrow-right.png';
import close from '../Assets/close-button.png';

export const carouselInitState = {
    btnPrevClass: 'btn-prev',
    btnNextClass: 'btn-next',
    disableClass: 'btn-disable',
    btnPrevActive: arrowLeft,
    btnPrevtDisable: arrowPrev,
    btnNextActive: arrowRight,
    btnNextDisable: arrowNext,
};

export const modalInitState = {
    image0: close,
    alt0: 'close button',
};

export const HeaderItem = [
    {
        elment: 'Главная',
    },
];
