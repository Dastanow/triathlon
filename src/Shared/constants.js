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

//------init-form-state-----------------------

export const initStateFaqForm = {
    section: 'faq',
    faqTitle: 'Остались вопросы?',
    text: 'Мы рады ответить на любой Ваш вопрос, выслушать Ваше предложение.',
    formTitle: 'form-faq__title',
    formContent: 'form-faq__content',
    classButton: 'form-faq__button',
    isClass: 'form-faq',
    fieldName: 'Ваше имя*',
};

export const initStateAppForm = {
    section: 'app',
    title: 'Оставить заявку',
    formTitle: 'form-app__title',
    formContent: 'form-app__content',
    classButton: 'form-app__button',
    isClass: 'form-app',
    fieldName: 'Ваше имя*',
};

export const initStateVacancyForm = {
    section: 'vacancy',
    vacancyTitle: 'Откликнуться на вакансию',
    formTitle: 'form-vacancy__title',
    formContent: 'form-vacancy__content',
    classButton: 'form-vacancy__button',
    isClass: 'form-vacancy',
    fieldName: 'Имя, Фамилия*',
};
