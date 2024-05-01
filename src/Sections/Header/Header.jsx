import { useState, useEffect } from 'react'
import './Header.scss'
import logotype from '@assets/logo1.png'
import account from '@assets/account.svg'
import ru from '@assets/language_rus.png'
import ky from '@assets/language_kyr.png'
import { Link } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { useTranslation } from 'react-i18next'
import { FaChevronUp } from 'react-icons/fa'

const navigatePath = [
    [{ text: 'path1', id: 'main' }],
    [{ text: 'path2', id: 'coaches' }],
    [{ text: 'path3', id: 'abonement' }],
    [{ text: 'path4', id: 'section' }],
    [{ text: 'path5', id: 'schedule', script: 'https://reservi.ru/widget-fit1c.v2/js/config.js' }],
    [{ text: 'path6', id: 'services' }],
    [{ text: 'path7', id: 'location' }],
];

export const Header = () => {
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || i18n.language,
    )
    const [showOtherImage, setShowOtherImage] = useState(false)

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
        console.log('Language saved to localStorage:', i18n.language) // Отладочный вывод
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage, i18n])

    const handleSvgClick = () => {
        setShowOtherImage((prevState) => !prevState);
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
    const handleSchaduleClick = (script) => {
        const win = window.open('', '_blank');
        win.document.open();
        win.document.write(`
        <html>
            <head>
                <script src="${script}" data-fit-salon-id="b1297733-0bf6-48da-bda8-4beb936b6ec5"></script>
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

    const switchLanguage = () => {
        const newLanguage = selectedLanguage === 'ru' ? 'ky' : 'ru'
        setSelectedLanguage(newLanguage)
    }

    console.log('Current selectedLanguage:', i18n.language) // Отладочный вывод

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
                                        if (item.id === 'schedule') {
                                            return (
                                                <p key={id}>
                                                    <a
                                                        className="headerNavLink"
                                                        href={`#${item.id}`}
                                                        onClick={() => handleSchaduleClick(item.script)}
                                                    >
                                                        {t(item.text)}
                                                    </a>
                                                </p>
                                            );
                                        } else {
                                            return (
                                                <p key={id}>
                                                    <a
                                                        className="headerNavLink"
                                                        href={`#${item.id}`}
                                                    >
                                                        {t(item.text)}
                                                    </a>
                                                </p>
                                            );
                                        }
                                    }
                                })}

                            </div>
                        ))}

                    </ul>
                </nav>
                <div className="headerWrapper">
                    <div className="headerLanguage" onClick={handleSvgClick}>
                        <img
                            src={selectedLanguage === 'ru' ? ru : ky}
                            alt={
                                selectedLanguage === 'ru'
                                    ? 'russian'
                                    : 'kygyz'
                            }
                        />
                        <FaChevronUp />
                        {showOtherImage && (
                            <div className="header-back">
                                <div
                                    className="headerOption"
                                    onClick={switchLanguage}>
                                    <img
                                        src={
                                            selectedLanguage === 'ru'
                                                ? ky
                                                : ru
                                        }
                                        alt={
                                            selectedLanguage === 'ru'
                                                ? 'kygyz'
                                                : 'russian'
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
    )
}

export default Header
