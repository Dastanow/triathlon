import React from 'react'
import './OurServices.scss'
import arrow from '../../Assets/Arrow.svg'
import bicycle from '../../Assets/svgServices/bicycle.svg'
import swimm from '../../Assets/svgServices/swimm.svg'
import dumbbells from '../../Assets/svgServices/dumbbells.svg'
import group from '../../Assets/svgServices/group.svg'
import '../../UI/CustomTitle/CustomTitle.scss'
import Modale from '../../Modules/ModulWindow/Modale'
import { useState } from 'react'; 


const OurServices = () => {

    const [modal,setModal] = useState(false)

    return (
        <div className="service">

            <div className="service__block">
                <h1 className="cust_title">Наши услуги</h1>

                <div className="all__cards">


                    <div className="all__cards_card">
                        <h2 className="all__cards-text">Персональные тренировки</h2>
                        <span onClick={() => setModal(true) }
                         className="all__info">Узнать больше
                            <img className="all__info__image" src={arrow} alt="" /></span>
                        <img className="img__zero" src={dumbbells} alt="" srcSet="" />

                    </div>

                    <div className="all__cards_card">
                        <h2 className="all__cards-zero">Составления индивидуальных программ </h2>
                        <span onClick={() => setModal(true) }
                         className="all__info-one">Узнать больше
                            <img className="all__info__image" src={arrow} alt="" /></span>
                        <img className="img__one" src={group} alt="" />
                    </div>

                    <div className="all__cards_card">
                        <h2 className="all__cards-one">Массаж</h2>
                        <span onClick={() => setModal(true) }
                         className="all__info-two">Узнать больше
                            <img className="all__info__image" src={arrow} alt="" /></span>
                        <img className="img__two" src={dumbbells} alt="" />
                    </div>

                    <div className="all__cards_card">
                        <h2 className="all__cards-two">Аренда велосипеда</h2>
                        <span onClick={() => setModal(true) }
                         className="all__info-three">Узнать больше
                            <img className="all__info__image" src={arrow} alt="" /></span>
                        <img className="img__three" src={bicycle} alt="" />
                    </div>

                    <div className="all--card-two">
                        <div className="all__cards_card">
                            <h2 className="all__cards-three">Ячейки для хранения велосипеда</h2>
                            <span onClick={() => setModal(true) }
                             className="all__info-four">Узнать больше
                                <img className="all__info__image" src={arrow} alt="" /></span>
                            <img className="img__four" src={bicycle} alt="" />
                        </div>

                        <div className="all__cards_card">
                            <h2 className="all__cards-four">Услуги вело-мастера</h2>
                            <span onClick={() => setModal(true) }
                            className="all__info-five">Узнать больше
                                <img className="all__info__image" src={arrow} alt="" /></span>
                            <img className="img__five" src={bicycle} alt="" />
                        </div>

                        <div className="all__cards_card">
                            <h2 className="all__cards-five">Лицензия триатлета</h2>
                            <span onClick={() => setModal(true) }
                            className="all__info-six">Узнать больше
                                <img className="all__info__image" src={arrow} alt="" /></span>
                            <img className="img__six" src={swimm} alt="" />
                        </div>
                    </div>
                    <div className="modaleWindow">
                        {modal ? <Modale/> : null}
                    </div>

                </div>
            </div>

           
        </div>
    )
}

export default OurServices