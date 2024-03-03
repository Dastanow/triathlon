// import React from 'react'
import './Header1.scss'
import logot from '../../Assets/logo1.png'
import acc from '../../Assets/acc1.png'


const Header1 = () => {
    return (
        <div>
            <div className="lein">

                <div className="lein-ing">

                    <img className="logo" src={logot} alt="" />

                </div>

                <div className="navigation">

                    <ul className="all-links">

                        <li className="links" >О нас</li>
                        <li className="links">Тренеры</li>
                        <li className="links">Абонементы</li>
                        <li className="links">Секции</li>
                        <li className="links">Расписание</li>
                        <li className="links">Фотогалерея</li>
                        <li className="links">Новости</li>
                        <li className="links">Контакты</li>

                    </ul>

                </div>

                <div className="lein-acc">

                    <img className="acc" src={acc} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Header1