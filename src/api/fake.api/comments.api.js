import client1 from '../../Assets/client1.svg';
import client2 from '../../Assets/client2.svg';
import client3 from '../../Assets/client3.svg';
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
    return { comments };
}
