import { useState } from 'react';
import './Header.scss'
import logot from '../../Assets/logo1.png'
import acc from '../../Assets/acc1.png'
import rus from '../../Assets/language_rus.png'
import kyr from '../../Assets/language_kyr.png'
import svg_landuage from '../../Assets/language.svg'
import { Link, useNavigate } from 'react-router-dom'

const Header = () => {
    const nav = useNavigate();
    const [showOtherImage, setShowOtherImage] = useState(false);    
    const handleSvgClick = (event) => {
        if (!event.target.closest('.lein-acc')) {
            setShowOtherImage(prevState => !prevState);
        }
    }
    const  goToMainPage = () =>{
        nav('/')
        window.scrollTo(2000, 2000)
    }

    return (
        <div className="mein">
            <div className="lein">
                <div className="lein-ing">
                    <Link to="/">
                        <img className="logo" src={logot} alt="" />
                    </Link>
                </div>
                <div className="navigation">
                    <ul className="all-links">
                        <a href="#main"><li className="links" onClick={goToMainPage}>Главная</li></a>
                        <a href="#coaches"><li className="links"onClick={goToMainPage}>Тренеры</li></a>
                        <a href="#abonement"><li className="links" onClick={goToMainPage}>Абонементы</li></a> 
                        <a href="#section"> <li className="links" onClick={goToMainPage}>Секции</li></a>
                        <li className="links">Расписание</li>
                        <a href="#services"><li className="links" onClick={goToMainPage}>Услуги</li></a>
                        <a href="#location"><li className="links" onClick={goToMainPage}>Контакты</li></a>
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