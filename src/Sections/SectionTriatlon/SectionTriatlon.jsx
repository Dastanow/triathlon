import { CustomTitle } from '@ui'
import './SectionTriatlon.scss'
import { Container } from '@components'
import { SectionTriatlhonMobile } from './SectionTriatlhonMobile/SectionTriatlhonMobile'
import { useEffect, useState } from 'react'

const SectionTriatlon = () => {
    const [showMobile, setShowMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setShowMobile(window.matchMedia('(max-width: 768px)').matches)
        })
    }, [])

    const rows = [
        {
            id: 1,
            group: 'Раннее развитие, 5-7 лет',
            note: 'Плавание, ОФП как дополнение до/после тренировки',
            hours: '2-4 часа, 3 тренировки',
            cost: '3000 с/3 мес., 4500 с/ мес.',
        },
        {
            id: 2,
            group: 'Школьники 7-10 лет',
            note: 'Плавание, ОФП, основа бега',
            hours: '4-5 часов, 4-5 тренировок',
            cost: '16 000 с/ 3 мес., 5800 с/мес',
        },
        {
            id: 3,
            group: 'Школьники подготовка триатлон, до 13 лет',
            note: 'Плавание, ОФП, основа бега, начало владением велосипеда (станок)',
            hours: '5-6 часов, 3 тренировки',
            cost: '20 000 с/ 3 мес., 7000 с/мес',
        },
        {
            id: 4,
            group: 'Подростки, 13-15 лет',
            note: 'Полная подготовка',
            hours: '6-7 часов, 4-5 тренировок',
            cost: '23 000 с/ 3 мес., 8000 с/мес',
        },
        {
            id: 5,
            group: 'Подростки, 16-18 лет',
            note: 'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '33 000 с/ 3 мес., 11 500 с/мес',
        },
        {
            id: 6,
            group: 'Секция триатлона для любителей УТРО (7:00 - 10:00)',
            note: 'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '33 000 с/ 3 мес., 11 500 с/мес',
        },
        {
            id: 7,
            group: 'Секция триатлона для любителей ВЕЧЕР (18:30 - 21:30',
            note: 'Полная подготовка',
            hours: '12-14 часов, 10-11 тренировок',
            cost: '37 000 с/ 3 мес., 12 800 с/мес',
        },
        {
            id: 8,
            group: 'Секция выходного дня, Плавание',
            note: 'Дети от 5 до 16 лет',
            hours: 'СБ, ВС',
            cost: '13 500 с/3 мес',
        },
        {
            id: 9,
            group: 'Секция выходного дня, Аквалон',
            note: 'Дети от 5 до 16 лет',
            hours: 'СБ, ВС',
            cost: '18 500 с/3 мес',
        },
        // Add more rows as needed
    ]

    return (
        <section id="table" className="tableMobile">
            <Container classNames="tableMobileContainer">
                <CustomTitle title={'Секции Триатлон'} />
                {showMobile ? (
                    <SectionTriatlhonMobile rows={rows} />
                ) : (
                    <table>
                        <thead>
                            <tr className="tableHead">
                                <th className="tableTop">Группа</th>
                                <th className="tableTop">Примечание</th>
                                <th className="tableTop">
                                    Кол-во часов в нед.
                                </th>
                                <th className="tableTop">Стоимость</th>
                            </tr>
                        </thead>
                        <tbody>
                            {rows.map((row, index) => (
                                <tr className="tableBody" key={index}>
                                    <td>{row.group}</td>
                                    <td>{row.note}</td>
                                    <td>{row.hours}</td>
                                    <td>{row.cost}</td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                )}
            </Container>
        </section>
    )
}

export default SectionTriatlon
