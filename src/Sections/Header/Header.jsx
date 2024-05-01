import React, { useEffect, useState } from 'react';
import './Header.scss';
import logotype from '../../Assets/logo1.png';
import account from '../../Assets/account.svg';
import { FaChevronUp } from 'react-icons/fa';
import rus from '../../Assets/language_rus.png';
import kyr from '../../Assets/language_kyr.png';
import { Link } from 'react-router-dom';
import { Container } from '../../Components/Container/Container';
import { useTranslation } from 'react-i18next';

const navigatePath = [
    [{ text: 'path1', id: 'main' }],
    [{ text: 'path2', id: 'coaches' }],
    [{ text: 'path3', id: 'abonement' }],
    [{ text: 'path4', id: 'section' }],
    [{ text: 'path5' ,}],
    [{ text: 'path6', id: 'services' }],
    [{ text: 'path7', id: 'location' }],
];

export const Header = () => {
    const { t } = useTranslation();
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
        changeLanguage(language);
    };

    const handleClick = () => {
        const win = window.open('', '_blank');

        win.document.open();
        win.document.write(`
            <html>
                <head>
                    <script src="https://reservi.ru/widget-fit1c.v2/js/config.js" data-fit-salon-id="b1297733-0bf6-48da-bda8-4beb936b6ec5"></script>
                </head>
                <body>
                    <div data-get-fit-index-lk></div>
                    <script>
                        window.onload = function() {
                            // Любой код, который вы хотите выполнить после загрузки скрипта
                        };
                    </script>
                </body>
            </html>
        `);
        win.document.close();
    };

    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.matchMedia('(min-width: 1024px)').matches) {
                const header = document.querySelector('.header');
                const headerHeight = header.offsetHeight;
                const scrollThreshold = 1.1 * headerHeight;
                if (window.scrollY > scrollThreshold) {
                    header.classList.add('fixed');
                } else {
                    header.classList.remove('fixed');
                }
            }
        });
    }, []);

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

                                    if (typeof item === 'object' && item.id !== 4) {
                                        return (
                                            <p key={id}>
                                                <a
                                                    className="headerNavLink"
                                                    href={`#${item.id}`}>
                                                    {' '}
                                                    {t(item.text)}
                                                </a>
                                            </p>
                                        );
                                    }else if (item.id === 5){
                                        <p     onClick={handleClick}>
                                        
                                            {t(item.text)}
                                           
                                        </p>
                                    }
                                })}
                            </div>
                        ))}
                        {/* Добавление скрипта к последнему элементу списка */}
                      
                    </ul>
                </nav>
                <div className="headerWrapper">
                    <div className="headerLanguage" onClick={handleSvgClick}>
                        <img
                            src={language === 'rus' ? rus : kyr}
                            alt={language === 'rus' ? 'Russian' : 'English'}
                        />
                        <FaChevronUp className={showOtherImage && 'open'} />
                        {showOtherImage && (
                            <div className="header-back">
                                <div
                                    className="headerOption"
                                    onClick={switchLanguage}>
                                    <img
                                        src={language === 'rus' ? kyr : rus}
                                        alt={
                                            language === 'rus'
                                                ? 'English'
                                                : 'Russian'
                                        }
                                    />
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="headerAccount">
                        <img
                            src={account}
                            onClick={handleClick}
                            alt="account"
                        />
                    </div>
                </div>
            </Container>
        </header>
    );
};
