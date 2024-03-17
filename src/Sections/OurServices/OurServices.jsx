// import React from 'react'
import './OurServices.scss'
import arrow from '../../Assets/Arrow.svg'
import bicycle from '../../Assets/svgServices/bicycle.svg'
import book from '../../Assets/svgServices/book.svg'
import dumbbells from '../../Assets/svgServices/dumbbells.svg'
import group from '../../Assets/svgServices/group.svg'
import tick from '../../Assets/svgServices/tick.svg'
import double from '../../Assets/svgServices/double.svg'
import '../../UI/CustomTitle/CustomTitle.scss'
import ModaleWindow from '../../Modules/ModulWindow/ModaleWindow'
import { useState } from 'react'; 


const   OurServices = () => {

    const [modalActive, setModalActive] = useState(false)


    return (
        <div className="service">
            <div className="service__block">
                <h1 className="cust_title">Наши услуги</h1>

                <div className="all__cards">
                    <div className="all--card-one">
                    <div className="all__cards_card">
                        <h2 className="all__cards-text">Персональные тренировки</h2>
                        <div onClick={() => setModalActive(true)} className="all__info">
                        <span onClick={() => setModalActive(true)}
                            className="modal-Title">Узнать больше
                             </span>
                             </div>
                        <img className="img__zero" src={dumbbells} alt="" srcSet="" />

                    </div>

                    <div className="all__cards_card">
                        <h2 className="all__cards-zero">Массаж </h2>
                        <div className="all__info">
                        <span onClick={() => setModalActive(true)}
                            className="modal-Title">Узнать больше
                              </span>
                              </div>
                        <img className="img__one" src={book} alt="" />
                    </div>

                    <div className="all__cards_card">
                        <h2 className="all__cards-one">Составления индивидуальных программ</h2>
                        <div className="all__info">
                        <span onClick={() => setModalActive(true)}
                            className="modal-Title">Узнать больше
                             </span>
                             </div>
                        <img className="img__two" src={group} alt="" />
                    </div>
                    </div>


                    <div className="all--card-two">
                    <div className="all__cards_card">
                        <h2 className="all__cards-two">Ячейки для хранения велосипеда </h2>
                        <div className="all__info">
                        <span onClick={() => setModalActive(true)}
                            className="modal-Title">Узнать больше
                               </span>
                               </div>
                        <img className="img__three" src={double} alt="" />
                    </div>

                        <div className="all__cards_card">
                            <h2 className="all__cards-three">Аренда велосипеда</h2>
                            <div className="all__info">
                            <span onClick={() => setModalActive(true)}
                                className="modal-Title">Узнать больше
                                </span>
                                </div>
                            <img className="img__four" src={bicycle} alt="" />
                        </div>

                        <div className="all__cards_card">
                            <h2 className="all__cards-four">Услуги <div>вело-мастера</div></h2>
                            <div className="all__info">
                            <span onClick={() => setModalActive(true)}
                                className="modal-Title">Узнать больше
                               </span>
                               </div>
                            <img className="img__five" src={bicycle} alt="" />
                        </div>

                        <div className="all__cards_card">
                            <h2 className="all__cards-five">Лицензия триатлета</h2>
                            <div className="all__info">
                            <span onClick={() => setModalActive(true)}
                                className="modal-Title">Узнать больше
                               </span>
                               </div>
                            <img className="img__six" src={tick} alt="" />
                        </div>
                    </div>

                    <ModaleWindow active={modalActive} setActive={setModalActive}/>

                </div>
            </div>
        </div>
    );
};

export default OurServices;