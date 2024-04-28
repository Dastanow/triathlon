import './OurServices.scss'
import ModalWindow from '../../Modules/ModalWindow'
import doubleIcon from '@assets/svgServices/transparent.png'
import Img1 from '@assets/svgServices/Dumbless.svg'
import Img2 from '@assets/svgServices/book.svg'
import Img3 from '@assets/svgServices/Lady.svg'
import Img4 from '@assets/svgServices/Snow.svg'
import Img5 from '@assets/svgServices/BicycleBike.svg'
import Img6 from '@assets/svgServices/bicycle.svg'
import Img7 from '@assets/svgServices/Certified.svg'
import Img8 from '@assets/svgServices/Lockers.svg'
import Img9 from '@assets/svgServices/parking.svg'
import { useState } from 'react'
import { CustomTitle } from '@ui'
import { Container } from '@components'

export const OurServices = () => {
    const [modalActive, setModalActive] = useState(false)

    const data = [
        {
            id: 0,
            name: 'Персональные тренировки',
            icon: Img1,
            doubleIcon: doubleIcon,
        },
        {
            id: 1,
            name: 'Массаж',
            icon: Img2,
            doubleIcon: doubleIcon,
        },
        {
            id: 2,
            name: 'Составления индивидуальных программ',
            icon: Img3,
            doubleIcon: doubleIcon,
        },
        {
            id: 3,
            name: '30 дней заморозки',
            icon: Img4,
            doubleIcon: doubleIcon,
        },
        {
            id: 4,
            name: 'Ячейки для хранения велосипеда',
            icon: Img5,
            doubleIcon: doubleIcon,
        },
        {
            id: 5,
            name: 'Аренда велосипеда',
            icon: Img6,
            doubleIcon: doubleIcon,
        },
        {
            id: 6,
            name: 'Услуги вело-мастера',
            icon: Img6,
            doubleIcon: doubleIcon,
        },
        {
            id: 7,
            name: 'Лицензия триатлета',
            icon: Img7,
            doubleIcon: doubleIcon,
        },
        {
            id: 8,
            name: 'Аренда шкафчиков',
            icon: Img8,
            doubleIcon: doubleIcon,
        },
        {
            id: 9,
            name: 'Парковка',
            icon: Img9,
            doubleIcon: doubleIcon,
        },
    ]

    return (
        <section className="ourServices" id="ourServices">
            <Container classNames="ourServicesContainer">
                <CustomTitle title={'Наши услуги'} />
                <div className="ourServicesCards">
                    {data.map((card) => {
                        return (
                            <div key={card.id} className="ourServicesCard">
                                <div className="ourServicesCardContent">
                                    <h5 className="ourServicesCardLabel">
                                        {card.name}
                                    </h5>
                                    <button
                                        className="ourServicesCardButton"
                                        onClick={() => setModalActive(true)}>
                                        Узнать больше
                                    </button>
                                </div>
                                <img
                                    src={card.icon}
                                    alt="img"
                                    className="ourServicesCardImg"
                                />
                            </div>
                        )
                    })}
                </div>
                <ModalWindow active={modalActive} setActive={setModalActive}>
                    {/* {... initStateAppForm}  /////FIX ME\\\\\\ */}
                </ModalWindow>
            </Container>
        </section>
    )
}
