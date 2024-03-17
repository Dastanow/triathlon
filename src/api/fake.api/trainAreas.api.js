import pool1 from '../../Assets/pool1.jpg';
import pool2 from '../../Assets/pool2.jpg';
import pool3 from '../../Assets/pool3.jpg';
import pool4 from '../../Assets/pool4.jpg';
import cardio1 from '../../Assets/cardio1.jpg';
import cardio2 from '../../Assets/cardio2.jpg';
import cardio3 from '../../Assets/cardio3.jpg';
import cardio4 from '../../Assets/cardio4.jpg';
import force1 from '../../Assets/force1.jpg';
import force2 from '../../Assets/force2.jpg';
import force3 from '../../Assets/force3.jpg';
import force4 from '../../Assets/force4.jpg';
import function1 from '../../Assets/function1.jpg';
import function2 from '../../Assets/function2.jpg';
import function3 from '../../Assets/function3.jpg';
import function4 from '../../Assets/function4.jpg';
//--------------------------------train-areas----------------------------------------
const trainAreas = [
    {
        id: 1,
        section: 'train',
        alt: 'pool area',
        title: 'Бассейн',
        text1: 'Инклюзивный бассейн с соленоватой водой и уникальной системой очистки, что безопасно даже для аллергиков.',
        text2: 'Система очистки воды: Песочные ламинированные фильтры, усиленные стекловолокном обеспечивают высокую степень очистки воды от загрязнений.',
        text3: 'Это оборудование - прочное и долговечное. Мы подобрали лучшее для вас, друзья!',
        slide: [
            { id: 1, image: pool1, alt: 'Бассейн 1' },
            { id: 2, image: pool2, alt: 'Бассейн 2' },
            { id: 3, image: pool3, alt: 'Бассейн 3' },
            { id: 4, image: pool4, alt: 'Бассейн 4' },
        ],
    },
    {
        id: 2,
        section: 'train',
        alt: 'cardio area',
        title: 'Кардио Зона',
        text1: 'Профессиональные беговые  дорожки фирмы Precor, механическая беговая дорожка фирмы Foreman и вело станки Tax2 от Garmin.',
        text2: '',
        text3: '',
        slide: [
            { id: 1, image: cardio1, alt: 'Кардио 1' },
            { id: 2, image: cardio2, alt: 'Кардио 2' },
            { id: 3, image: cardio3, alt: 'Кардио 3' },
            { id: 4, image: cardio4, alt: 'Кардио 4' },
        ],
    },
    {
        id: 3,
        section: 'train',
        alt: 'force area',
        title: 'Силовая зона',
        text1: 'Профессиональное силовое оборудование фирмы Foreman. Грузоблочные тренажеры premium line.',
        text2: 'Грузоблочные тренажеры серии STANDARD. Тренажеры для людей с ограниченными возможностями.',
        text3: 'Многоблочные тренажеры. Тренажеры, нагружаемые дисками.  Тренажеры на свободных весах.  Скамьи, стойки, подставки.',
        slide: [
            { id: 1, image: force1, alt: 'Силовая 1' },
            { id: 2, image: force2, alt: 'Силовая  2' },
            { id: 3, image: force3, alt: 'Силовая  3' },
            { id: 4, image: force4, alt: 'Силовая  4' },
        ],
    },

    {
        id: 4,
        section: 'train',
        alt: 'function area',
        title: 'Функциональная зона',
        text1: 'Для проведения функциональных тренировок с гантелями и других функциональных занятий.',
        text2: '',
        text3: '',
        slide: [
            { id: 1, image: function1, alt: 'Функциональная 1' },
            { id: 2, image: function2, alt: 'Функциональная 2' },
            { id: 3, image: function3, alt: 'Функциональная 3' },
            { id: 4, image: function4, alt: 'Функциональная 4' },
        ],
    },
];

export function fetchAll() {
    return { trainAreas };
}
