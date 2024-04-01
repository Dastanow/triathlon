import { useState } from 'react';
import './Header.scss'
import logot from '../../Assets/logo1.png'
import acc from '../../Assets/acc1.png'
import rus from '../../Assets/language_rus.png'
import kyr from '../../Assets/language_kyr.png'
import svg_landuage from '../../Assets/language.svg'
import { Link } from 'react-router-dom'



const Header = () => {

    const [showOtherImage, setShowOtherImage] = useState(false);
    
    const handleSvgClick = (event) => {
        if (!event.target.closest('.lein-acc')) {
          setShowOtherImage(prevState => !prevState);
        }
      }

    return (
        <div className="main">
            <div className="main__lein">

                <div className="main__logotype">

                <Link to="/">
                    <img className="main__logotype-icon" src={logot} alt="" />
                </Link>

                </div>

                <div className="navigation">

                    <ul className="all-links">

                        <li className="all-links__link" >Главная</li>
                        <li className="all-links__link">Тренеры</li>
                        <li className="all-links__link">Абонементы</li>
                        <li className="all-links__link">Секции</li>
                        <li className="all-links__link">Расписание</li>
                        <li className="all-links__link">Услуги</li>
                        <li className="all-links__link">Контакты</li>

                    </ul>

                </div>
                <div className="lein-language">
                    <div className="languages">
                        <img className="language" src={rus} alt="" />
                        <img className="languages_svg" src={svg_landuage} alt="" onClick={handleSvgClick} />
                    </div>
                    {showOtherImage && (
                    <div className="other-image-container">
                        <img src={kyr} alt="Other Image" />
                        <img className="language" src={rus} alt="" />
                    </div>
                )}

                </div>

                <div className="lein-acc">

                    <img className="acc" src={acc} alt="" />

                </div>
            </div>
        </div>
    )
}

export default Header