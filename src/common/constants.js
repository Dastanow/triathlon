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

export const coachesInitState = {
    gap: 36,
    slidesPerView: 4,
    coachClasses: {
        class0: 'coach-inner__wrapper',
        class1: 'coach-card',
        class2: 'coach-card__overlay',
        class3: 'coach-name',
        class4: 'coach-info',
        class5: 'coach-description',
    },
};

export const trainAreasInitState = {
    gap: 0,
    slidesPerView: 1,
    trainClass: {
        class0: 'train-areas-inner__wrapper',
    },
};

export const feedbackInitState = {
    gap: 35,
    slidesPerView: 3,
    commentClasses: {
        class0: 'comment-inner__wrapper',
        class1: 'comment-card',
        class2: 'comment-card__info',
        class3: 'comment-author',
        class4: 'comment-title',
        class5: 'comment-text',
    },
};
export const modalInitState = {
    image0: close,
    alt0: 'close button',
};