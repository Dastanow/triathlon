import './SectionTriatlon.scss';

const SectionTriatlon = () => {
    const rows = [
        {
            group: 'Раннее развитие, 5-7 лет',
            note: 'Плавание, ОФП как дополнение до/после тренировки',
            hours: '2-4 часа, 3 тренировки',
            cost: '3000 с/3 мес., 4500 с/ мес.'
        },
        {
            group: 'Школьники 7-10 лет',
            note: 'Плавание, ОФП, основа бега',
            hours: '4-5 часов, 4-5 тренировок',
            cost: '16 000 с/ 3 мес., 5800 с/мес'
        },
        {
            group:'Школьники подготовка триатлон, до 13 лет',
            note:'Плавание, ОФП, основа бега, начало владением велосипеда (станок)',
            hours: '5-6 часов, 3 тренировки',
            cost: '20 000 с/ 3 мес., 7000 с/мес'
        },
        {
            group:'Подростки, 13-15 лет',
            note:'Полная подготовка',
            hours: '6-7 часов, 4-5 тренировок',
            cost: '23 000 с/ 3 мес., 8000 с/мес'
        },
        {
            group:'Подростки, 16-18 лет',
            note:'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '33 000 с/ 3 мес., 11 500 с/мес'
        },
        {
            group:'Секция триатлона для любителей УТРО (7:00 - 10:00)',
            note:'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '33 000 с/ 3 мес., 11 500 с/мес'
        },
        {
            group:'Секция триатлона для любителей ВЕЧЕР (18:30 - 21:30',
            note:'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '37 000 с/ 3 мес., 12 800 с/мес'
        },
        {
            group:'Секция выходного дня, Плавание',
            note:'Дети от 5 до 16 лет',
            hours: 'СБ, ВС',
            cost: '13 500 с/3 мес'
        },
        {
            group:'Секция выходного дня, Аквалон',
            note:'Дети от 5 до 16 лет',
            hours: 'СБ, ВС',
            cost: '18 500 с/3 мес'
        },
        // Add more rows as needed
    ];

    return (
        <table className="section" id="section">
            <h2>Секции Триатлон</h2>
            <thead>
                <tr className="section__trhead">
                    <th className="section__header">Группа</th>
                    <th className="section__header">Примечание</th>
                    <th className="section__header">Кол-во часов в нед.</th>
                    <th className="section__header">Стоимость</th>
                </tr>
            </thead>
            <tbody>
                {rows.map((row, index) => (
                    <tr className="section__row" key={index}>
                        <td className="section__column">{row.group}</td>
                        <td className="section__column">{row.note}</td>
                        <td className="section__column">{row.hours}</td>
                        <td className="section__column">{row.cost}</td>
                    </tr>
                ))}
            </tbody>
        </table>
    );
};

export default SectionTriatlon;
    