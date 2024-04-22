import { useState } from 'react';
import './Header.scss';
import logotype from '../../Assets/logo1.png';
import account from '../../Assets/account.svg';
import chevron from '../../Assets/solar_chevron-up.svg'
import rus from '../../Assets/language_rus.png';
import kyr from '../../Assets/language_kyr.png';
import { Link, useNavigate } from 'react-router-dom';
import Container from '../../Components/Container/Container'
import { useTranslation } from 'react-i18next';

const navigatePath = [
    [
      
        {text:'path1', id: 'main'}
    ],
    [
        
        {text: 'path2', id: 'coaches'}
    ],
    [
        {text: 'path3', id: 'abonement'}
    ],
    [
        {text: 'path4', id: 'section'}
    ],
    [
        {text: 'path5'}
    ],
    [
        {text: 'path6', id: 'services'}
    ],
    [
        {text: 'path7', id: 'location'}
    ],
]

const Header = () => {
    const { t } = useTranslation();
    const nav = useNavigate();
    const { i18n } = useTranslation();
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language);
    const [language, setLanguage] = useState('rus');
    const [showOtherImage, setShowOtherImage] = useState(false);

    const handleSvgClick = () => {
        setShowOtherImage((prevState) => !prevState);
    };

    const changeLanguage = (lang) => {
        i18n.changeLanguage(lang);
        setSelectedLanguage(lang);
    };

    const switchLanguage = () => {
        setLanguage(language === 'rus' ? 'eng' : 'rus');
        changeLanguage(language)
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
                    {navigatePath.map((block, index) => (
                    <div key={index}>
                        {block.map((item, id) => {
                            if (typeof item === 'object') {
                                return (
                                    <p key={id}>
                                        <a className="headerNavLink" href={`#${item.id}`}> {t(item.text)}</a>
                                    </p>
                                );
                            }
                        })}
                    </div>
                ))}
                    </ul>
                </nav>
                <div className="headerWrapper">
                    <div className="headerLanguage" onClick={handleSvgClick}>
                        <img src={language === 'rus' ? rus : kyr} alt={language === 'rus' ? 'Russian' : 'English'} />
                        <img src={chevron} alt="Chevron" />
                        {showOtherImage && (
                            <div className="headerOption" onClick={switchLanguage}>
                                <img src={language === 'rus' ? kyr : rus} alt={language === 'rus' ? 'English' : 'Russian'} />
                            </div>
                        )}
                    </div>
                    <div className="headerAccount">
                        <img src={account} alt="account" />
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;