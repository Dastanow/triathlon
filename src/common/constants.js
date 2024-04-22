import arrowLeft from '../Assets/arrow-left.png';
import arrowPrev from '../Assets/arrow-prev.png';
import arrowNext from '../Assets/arrow-next.png';
import arrowRight from '../Assets/arrow-right.png';
import close from '../Assets/close-button.png';
import error from '../Assets/dangerous.svg';
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
    userNameField: 'form-faq__field-name',
    classArea: 'form-faq__area',
    classUser: 'form-faq__user',
    classPhone: 'form-faq__phone',
    classButton: 'form-faq__button',
    isClass: 'form-faq',
    fieldName: 'Ваше имя*',
};

export const initStateAppForm = {
    section: 'app',
    title: 'Оставить заявку',
    formTitle: 'form-app__title',
    formContent: 'form-app__content',
    errorIcon: error,
    classArea: 'form-app__area',
    classUser: 'form-app__user',
    classPhone: 'form-app__phone',
    classButton: 'form-app__button',
    isClass: 'form-app',
    fieldName: 'Ваше имя*',
};

export const initStateVacancyForm = {
    section: 'vacancy',
    vacancyTitle: 'Откликнуться на вакансию',
    formTitle: 'form-vacancy__title',
    formContent: 'form-vacancy__content',
    classUser: 'form-vacancy__user',
    classPhone: 'form-vacancy__phone',
    errorIcon: error,
    classButton: 'form-vacancy__button',
    isClass: 'form-vacancy',
    fieldName: 'Имя, Фамилия*',
};
