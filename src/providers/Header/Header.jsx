import { useState } from 'react';
import './Header.scss';
import logot from '../../Assets/logo1.png';
import acc from '../../Assets/acc1.png';
import rus from '../../Assets/language_rus.png';
import kyr from '../../Assets/language_kyr.png';
import svg_landuage from '../../Assets/language.svg';
import { Link, useNavigate } from 'react-router-dom';

const Header = () => {
    const nav = useNavigate();
    const [showOtherImage, setShowOtherImage] = useState(false);

    const handleSvgClick = (event) => {
        if (!event.target.closest('.lein-acc')) {
            setShowOtherImage((prevState) => !prevState);
        }
    };

    const goToMainPage = () => {
        nav('/');
        window.scrollTo(0, 0);
    };

    return (
        <div className="main">
            <div className="mainlein">
                <Link to="/">
                    <img className="main__logotype-icon" src={logot} alt="" />
                </Link>

                <ul className="navigation">
                    <li className="links" onClick={goToMainPage}><a href="#main">Главная</a></li>
                    <li className="links" onClick={goToMainPage}><a href="#coaches">Тренеры</a></li>
                    <li className="links" onClick={goToMainPage}><a href="#abonement">Абонементы</a></li>
                    <li className="links" onClick={goToMainPage}><a href="#section">Секции</a></li>
                    <li className="links"><a href="#">Расписание</a></li>
                    <li className="links" onClick={goToMainPage}><a href="#services">Услуги</a></li>
                    <li className="links" onClick={goToMainPage}><a href="#location">Контакты</a></li>
                </ul>

                <div className="lein-language">
                    <div className="languages" onClick={handleSvgClick}>
                        <img className="language" src={rus} alt="" />
                        <img
                            className="languages_svg"
                            src={svg_landuage}
                            alt=""
                        />
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
    );
};
    


export default Header;

