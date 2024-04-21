import { useState } from 'react';
import './Header.scss';
import logotype from '../../Assets/logo1.png';
import account from '../../Assets/account.svg';
import chevron from '../../Assets/solar_chevron-up.svg'
import rus from '../../Assets/language_rus.png';
import kyr from '../../Assets/language_kyr.png';
import { Link, useNavigate } from 'react-router-dom';
import { Container } from '@components'

const navigatePath = [
    {
        id: '#main',
        path: 'Главная'
    },
    {
        id: '#coaches',
        path: 'Тренеры'
    },
    {
        id: '#subscription',
        path: 'Абонементы'
    },
    {
        id: '#table',
        path: 'Секции'
    },
    {
        id: '#ourServices',
        path: 'Услуги'
    },
    {
        id: '#location',
        path: 'Контакты'
    },
]

export const Header = () => {
    const nav = useNavigate();
    const [language, setLanguage] = useState('rus');
    const [showOtherImage, setShowOtherImage] = useState(false);

    const handleSvgClick = () => {
        setShowOtherImage((prevState) => !prevState);
    };

    const switchLanguage = () => {
        setLanguage(language === 'rus' ? 'kyr' : 'rus');
    };

    const goToMainPage = () => {
        nav('/');
        window.scrollTo(0, 0);
    };

    return (
        <header className="header">
            <Container classNames="headerContainer">
                <Link to="/">
                    <img
                        src={logotype}
                        className="headerLogotype"
                        alt="logotype Triathlon Center"
                    />
                </Link>
                <nav>
                    <ul className="headerNav">
                        <li
                            onClick={goToMainPage}
                        >
                            <Link
                                className="headerNavLink"
                                to="/schedule"
                            >
                                Расписание
                            </Link>
                        </li>
                        {navigatePath.map((path) => (
                            <li key={path.id}
                                onClick={goToMainPage}
                            >
                                <a
                                    className="headerNavLink"
                                    href={path.id}
                                >
                                    {path.path}
                                </a>
                            
                            </li>
                        ))}
                    </ul>
                </nav>
                <div className="headerWrapper">
                    <div className="headerLanguage" onClick={handleSvgClick}>
                        <img src={language === 'rus' ? rus : kyr} alt={language === 'rus' ? 'Russian' : 'Kyrgyz'} />
                        <img src={chevron} alt="Chevron" />
                        {showOtherImage && (
                            <div className="header-back">
                                <div className="headerOption" onClick={switchLanguage}>
                                    <img src={language === 'rus' ? kyr : rus} alt={language === 'rus' ? 'Kyrgyz' : 'Russian'} />
                                </div>
                            </div>
                        )}
                    </div>
                    <Link target="_blank" to={'/personal-account'} className="headerAccount">
                        <img src={account} alt="account" />
                    </Link>
                </div>
            </Container>
        </header>
    );
};