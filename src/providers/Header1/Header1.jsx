import './style.scss'
import logot from '../../Assets/logo1.png'
import acc from '../../Assets/acc1.png'
import rus from '../../Assets/language_rus.png'
import svg_landuage from '../../Assets/language.svg'


const Header1 = () => {
    return (
        <div className="header"> 
            <div className="lein">
                <div className="lein-ing">
                    <img className="logo" src={logot} alt="img" />
                </div>
                <div className="navigation">
                    <ul className="all-links">
                        <li className="links" >Главная</li>
                        <li className="links">Тренеры</li>
                        <li className="links">Абонементы</li>
                        <li className="links">Секции</li>
                        <li className="links">Расписание</li>
                        <li className="links">Услуги</li>
                        <li className="links">Контакты</li>
                    </ul>
                </div>
                <div className="lein-language">
                    <div className="languages">
                        <img className="language" src={rus} alt="img" />
                        <img className="languages_svg" src={svg_landuage} alt="img" />
                    </div>
                </div>
                <div className="lein-acc">
                    <img className="acc" src={acc} alt="img" />
                </div>
            </div>
        </div>
    )
}

export default Header1