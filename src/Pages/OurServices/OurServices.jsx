import React from 'react'
import './OurServices.scss'
import arrow from '../../Assets/Arrow.svg'
import bicycle from '../../Assets/pngServices/bicycle.png'
import swimm from '../../Assets/pngServices/swimm.png'
import dumbbells from '../../Assets/pngServices/dumbbells.png'
import towel from '../../Assets/pngServices/towel.png'


const OurServices = () => {
  return (
    <div className="service">

        <div className="service__block">
        <h1 className="our">Наши услуги</h1>

    <div className='all__cards'>


      <div className="all__cards_card">
              <h2 className="all__cards-text">Аренда велосипеда</h2>
              <p className="our_price">2500 сом/ месяц</p>
              <span className="all__info">Узнать больше
               <img className="all__info__image" src={arrow} alt="" /></span>
              <img className="img" src={bicycle} alt="" srcset="" />

      </div>

        <div className="all__cards_card">
              <h2 className="all__cards-text">Лицензия триатлета</h2>
              <p className="our_price-one">1200 сом/год</p>
              <span className="all__info">Узнать больше
               <img className="all__info__image" src={arrow} alt="" /></span>
              <img className="img__one" src={swimm} alt="" />
      </div>

      <div className="all__cards_card">
              <h2 className="all__cards-one">Массаж</h2>
              <p className="our_price-two">,,,,,</p>
              <span className="all__info">Узнать больше
               <img className="all__info__image" src={arrow} alt="" /></span>
              <img className="img__two" src={dumbbells} alt="" />
      </div>

      <div className="all__cards_card">
              <h2 className="all__cards-two">Услуги вело-мастера</h2>
              <p className="our_price-three">170 сом</p>
              <span className="all__info">Узнать больше
               <img className="all__info__image" src={arrow} alt="" /></span>
              <img className="img__three" src={towel} alt="" />
      </div>



      <div className="all--card-two">
      <div className="all__cards_card">
                    <h2 className="all__cards-three">Переоформление карт</h2>
                    <p className="our_price-four">1000 сом</p>
                    <span className="all__info">Узнать больше
                    <img className="all__info__image" src={arrow} alt="" /></span>
                    <img className="img__four" src={dumbbells} alt="" />
            </div>

            <div className="all__cards_card">
                    <h2 className="all__cards-four">Комплект полотенец и шлепанец</h2>
                    <p className="our_price-five">170 сом</p>
                    <span className="all__info">Узнать больше
                    <img className="all__info__image" src={arrow} alt="" /></span>
                    <img className="img__five" src={towel} alt="" />
            </div>

            <div className="all__cards_card">
                    <h2 className="all__cards-five">Ячейки для хранения велосипеда</h2>
                    <p className="our_price-six">1000 сом/ месяц</p>
                    <span className="all__info">Узнать больше
                    <img className="all__info__image" src={arrow} alt="" /></span>
                    <img className="img" src={bicycle} alt="" />
            </div>
      </div>


</div>
        </div>

           
    </div>
  )
}

export default OurServices