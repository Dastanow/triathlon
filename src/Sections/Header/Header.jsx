import { useState, useEffect } from 'react'
import './Header.scss'
import logotype from '@assets/logo1.png'
import account from '@assets/account.svg'
import chevron from '../../Assets/solar_chevron-up.svg'
import ru from '@assets/language_rus.png'
import ky from '@assets/language_kyr.png'
import burger from '../../Assets/burger.png'
import close from '../../Assets/close_burg.png'
import { Link } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { useTranslation } from 'react-i18next'

const navigatePath = [
    { text: 'path1', id: '#main' },
    { text: 'path2', id: '#coaches' },
    { text: 'path3', id: '#abonement' },
    { text: 'path4', id: '#section' },
    { text: 'path5', id: '/schedule' },
    { text: 'path6', id: '#services' },
    { text: 'path7', id: '#location' },
]

export const Header = () => {
    const [count, setCount] = useState(false)
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
    const [showOtherImage, setShowOtherImage] = useState(false)
    const [isLanguageOptionsOpen, setIsLanguageOptionsOpen] = useState(false)

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
        console.log('Language saved to localStorage:', selectedLanguage) // Отладочный вывод
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage, i18n])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 768px)').matches)
        })
    }, [])

    useEffect(() => {
        if (!isMobile) setCount(false)
    }, [isMobile])

    const handleSvgClick = () => {
        console.log('work')
        setShowOtherImage((prevState) => !prevState)
        setIsLanguageOptionsOpen((prevState) => !prevState)
    }
    console.log(showOtherImage)

    const handleNavLinkClick = (sectionId) => {
        const section = document.getElementById(sectionId)
        if (section) {
            section.scrollIntoView({ behavior: 'smooth' })
        }
        setCount(false)
    }

    const switchLanguage = () => {
        const newLanguage = selectedLanguage === 'ru' ? 'ky' : 'ru'
        setSelectedLanguage(newLanguage)
    }

    console.log('Current selectedLanguage:', i18n.language)

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
                    <ul
                        className={
                            isMobile
                                ? count
                                    ? 'headerNav active'
                                    : 'headerNav'
                                : 'headerNav'
                        }>
                        {navigatePath.map((path, index) => {
                            if (path.id === '/schedule') {
                                return (
                                    <li key={index}>
                                        <Link
                                            target="_blank"
                                            className="headerNavLink"
                                            to={`${path.id}`}
                                            onClick={() =>
                                                handleNavLinkClick(path.id)
                                            }>
                                            {t(path.text)}
                                        </Link>
                                    </li>
                                )
                            } else {
                                return (
                                    <li key={index}>
                                        <a
                                            onClick={() =>
                                                handleNavLinkClick(path.id)
                                            }
                                            className="headerNavLink"
                                            href={`${path.id}`}>
                                            {t(path.text)}
                                        </a>
                                        {index === navigatePath.length - 1 && (
                                            <hr className="mobileSeparator" />
                                        )}
                                    </li>
                                )
                            }
                        })}
                        {count && (
                            <div className="headerAccountBurger">
                                <img src={account} alt="account" />
                            </div>
                        )}
                    </ul>
                </nav>
                <div className="headerWrapper">
                    {!count && (
                        <div
                            className={'headerLanguage'}
                            onClick={handleSvgClick}>
                            <img
                                className="headerlangImg"
                                src={selectedLanguage === 'ru' ? ru : ky}
                                alt={
                                    selectedLanguage === 'ru'
                                        ? 'russian'
                                        : 'kygyz'
                                }
                            />
                            <img
                                src={chevron}
                                alt="Chevron"
                                style={{
                                    transform: isLanguageOptionsOpen
                                        ? 'rotate(180deg)'
                                        : '',
                                    transition: '0.5s',
                                }}
                            />
                            {showOtherImage && (
                                <div className="header-back">
                                    <div
                                        name="showOtherImage"
                                        className={
                                            'headerOption' +
                                            (showOtherImage ? ' show' : '')
                                        }
                                        onClick={switchLanguage}>
                                        <img
                                            className="headerlangImg"
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
                    )}
                    <div
                        onClick={() => setCount(!count)}
                        className="headerBurger">
                        {count ? (
                            <img src={close} alt="close" />
                        ) : (
                            <img src={burger} alt="burger" />
                        )}
                    </div>
                    <Link
                        to="/personal-account"
                        target="_blank"
                        className="headerAccount">
                        <img src={account} alt="account" />
                    </Link>
                </div>
            </Container>
        </header>
    )
}

export default Header
