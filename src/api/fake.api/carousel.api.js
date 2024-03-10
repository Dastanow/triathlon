import coach1 from '../../Assets/coach1.jpg';
import pool from '../../Assets/pool-area.jpg';
import client1 from '../../Assets/client1.svg';
import client2 from '../../Assets/client2.svg';
import client3 from '../../Assets/client3.svg';

//--------------------------slide-card-classes------------------------------

const coachClasses = {
    class0: 'coach-inner__wrapper',
    class1: 'coach-card',
    class2: 'coach-card__overlay',
    class3: 'coach-name',
    class4: 'coach-info',
    class5: 'coach-description',
};
const trainClasses = {
    class0: 'train-areas-inner__wrapper',
    class1: 'train-areas__card',
    class2: 'train-areas__overlay',
    class3: 'card__title',
    class4: 'card__text',
    class5: 'card__text',
};
const commentClasses = {
    class0: 'comment-inner__wrapper',
    class1: 'comment-card',
    class2: 'comment-card__info',
    class3: 'comment-author',
    class4: 'comment-title',
    class5: 'comment-text',
};

//--------------------------------coaches-----------------------------------------
const coaches = [
    {
        id: 1,
        area: 'gym',
        image: coach1,
        alt: 'coach1',
        title: 'Виталий Сметанко',
        text1: 'Сертифицированный тренер',
        text2: 'Амир - сертифицированный тренер с более чем 10-летним опытом работы в фитнес-индустрии.',
        text3: '',
    },
    {
        id: 2,
        area: 'gym',
        image: coach1,
        alt: 'coach2',
        title: 'Сулайманов Азизбек',
        text1: 'Групповой инструктор по фитнесу',
        text2: 'Азиза - инструктор по групповому фитнесу, специализирующийся на высокоинтенсивных тренировках.',
        text3: '',
    },
    {
        id: 3,
        area: 'gym',
        image: coach1,
        alt: 'coach3',
        title: 'Иванова Ирина',
        text1: 'Инструктор по йоге',
        text2: 'Жаслан - преданный своему делу инструктор по йоге, который верит в силу осознанности и движения.',
        text3: '',
    },
    {
        id: 4,
        area: 'gym',
        image: coach1,
        alt: 'coach4',
        title: 'Зубарев Михаил',
        text1: 'Сертифицированный тренер',
        text2: 'Амир - сертифицированный тренер с более чем 10-летним опытом работы в фитнес-индустрии.',
        text3: '',
    },
    {
        id: 5,
        area: 'pool',
        image: coach1,
        alt: 'coach5',
        title: 'Достаева Меруерт',
        text1: 'Групповой инструктор по фитнесу',
        text2: 'Азиза - инструктор по групповому фитнесу, специализирующийся на высокоинтенсивных тренировках.',
        text3: '',
    },
    {
        id: 6,
        area: 'pool',
        image: coach1,
        alt: 'coach6',
        title: 'Проскурников Савелий',
        text1: 'Инструктор по йоге',
        text2: 'Жаслан - преданный своему делу инструктор по йоге, который верит в силу осознанности и движения.',
        text3: '',
    },
    {
        id: 7,
        area: 'pool',
        image: coach1,
        alt: 'coach7',
        title: 'Ханадеев Артем',
        text1: 'Сертифицированный тренер',
        text2: 'Амир - сертифицированный тренер с более чем 10-летним опытом работы в фитнес-индустрии.',
        text3: '',
    },
    {
        id: 8,
        area: 'pool',
        image: coach1,
        alt: 'coach8',
        title: 'Артем Шапилов',
        text1: 'Групповой инструктор по фитнесу',
        text2: 'Азиза - инструктор по групповому фитнесу, специализирующийся на высокоинтенсивных тренировках.',
        text3: '',
    },
    {
        id: 9,
        area: 'pool',
        image: coach1,
        alt: 'coach9',
        title: 'Ханадеев Андрей',
        text1: 'Инструктор по йоге',
        text2: 'Жаслан - преданный своему делу инструктор по йоге, который верит в силу осознанности и движения.',
        text3: '',
    },
    {
        id: 10,
        area: 'pool',
        image: coach1,
        alt: 'coach10',
        title: 'Намуратов Алексей',
        text1: 'Инструктор по йоге',
        text2: 'Жаслан - преданный своему делу инструктор по йоге, который верит в силу осознанности и движения.',
        text3: '',
    },
    {
        id: 11,
        area: 'pool',
        image: coach1,
        alt: 'coach11',
        title: 'Мазовка Екатерина',
        text1: 'Инструктор по йоге',
        text2: 'Жаслан - преданный своему делу инструктор по йоге, который верит в силу осознанности и движения.',
        text3: '',
    },
    {
        id: 12,
        area: 'gym',
        image: coach1,
        alt: 'coach1',
        title: 'Виталий Сметанко',
        text1: 'Сертифицированный тренер',
        text2: 'Амир - сертифицированный тренер с более чем 10-летним опытом работы в фитнес-индустрии.',
        text3: '',
    },
];

//--------------------------------train-areas----------------------------------------
const trainAreas = [
    {
        id: 1,
        image: pool,
        alt: 'pool',
        title: 'Бассейн',
        text1: 'Инклюзивный бассейн с соленоватой водой и уникальной системой очистки, что безопасно даже для аллергиков.',
        text2: 'Система очистки воды: Песочные ламинированные фильтры, усиленные стекловолокном обеспечивают высокую степень очистки воды от загрязнений.',
        text3: 'Это оборудование - прочное и долговечное. Мы подобрали лучшее для вас, друзья!',
    },
    {
        id: 2,
        image: pool,
        alt: 'cardio area',
        title: 'Кардио Зона',
        text1: 'Профессиональные беговые  дорожки фирмы Precor, механическая беговая дорожка фирмы Foreman и вело станки Tax2 от Garmin.',
        text2: '',
        text3: '',
    },
    {
        id: 3,
        image: pool,
        alt: 'force area',
        title: 'Силовая зона',
        text1: 'Профессиональное силовое оборудование фирмы Foreman. Грузоблочные тренажеры premium line.',
        text2: 'Грузоблочные тренажеры серии STANDARD. Тренажеры для людей с ограниченными возможностями.',
        text3: 'Многоблочные тренажеры. Тренажеры, нагружаемые дисками.  Тренажеры на свободных весах.  Скамьи, стойки, подставки.',
    },
    {
        id: 4,
        image: pool,
        alt: 'function area',
        title: 'Функциональная зона',
        text1: 'Для проведения функциональных тренировок с гантелями и других функциональных занятий.',
        text2: '',
        text3: '',
    },
];

//---------------------------------comments-----------------------------------------
const comments = [
    {
        id: 1,
        image: client1,
        title: 'Ермаков Артур',
        text1: 'James Pattinson',
        text2: 'Триатлон Центр - идеальное место для тренировок! Профессиональные инструкторы, мотивация и атмосфера - всё здесь! Рекомендую!',
        text3: '',
    },
    {
        id: 2,
        image: client2,
        title: 'Дмитрий Петров',
        text1: 'James Pattinson',
        text2: 'Приятная атмосфера и профессиональные тренировки в Триатлон Центре. Очень рекомендую!',
        text3: '',
    },
    {
        id: 3,
        image: client3,
        title: 'Анна Иванова',
        text1: 'James Pattinson',
        text2: 'Триатлон Центр - профессиональные тренировки, дружелюбная атмосфера, рекомендую всем!',
        text3: '',
    },
    {
        id: 4,
        image: client1,
        title: 'Ермаков Артур',
        text1: 'James Pattinson',
        text2: 'Триатлон Центр - идеальное место для тренировок! Профессиональные инструкторы, мотивация и атмосфера - всё здесь! Рекомендую!',
        text3: '',
    },
    {
        id: 5,
        image: client2,
        title: 'Дмитрий Петров',
        text1: 'James Pattinson',
        text2: 'Приятная атмосфера и профессиональные тренировки в Триатлон Центре. Очень рекомендую!',
        text3: '',
    },
    {
        id: 6,
        image: client3,
        title: 'Анна Иванова',
        text1: 'James Pattinson',
        text2: 'Триатлон Центр - профессиональные тренировки, дружелюбная атмосфера, рекомендую всем!',
        text3: '',
    },
];

export function fetchAll() {
    return {
        coaches,
        trainAreas,
        coachClasses,
        trainClasses,
        comments,
        commentClasses,
    };
}
