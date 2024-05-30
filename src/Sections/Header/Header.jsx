import { useState, useEffect, useRef } from 'react'
import './Header.scss'
import logotype from '@assets/logo1.png'
import account from '@assets/account.svg'
import chevron from '@assets/solar_chevron-up.svg'
import ru from '@assets/language_rus.png'
import ky from '@assets/language_kyr.png'
import burger from '@assets/burger.png'
import close from '@assets/close_burg.png'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { useTranslation } from 'react-i18next'

export const navigatePath = [
    { text: 'path1', id: '#main' },
    { text: 'path2', id: '#coaches' },
    { text: 'path3', id: '#subscription' },
    { text: 'path4', id: '#section' },
    { text: 'path5', id: '/schedule' },
    { text: 'path6', id: '#ourServices' },
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
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const [is404Error, setIs404Error] = useState(false)

    useEffect(() => {
        const validPaths = ['/vacancies', '/']
        const isValidPath =
            validPaths.includes(window.location.pathname) ||
            validPaths.some((path) =>
                window.location.pathname.startsWith(path + '/'),
            )

        if (!isValidPath) {
            setIs404Error(true)
        } else {
            setIs404Error(false)
        }
    }, [window.location.pathname])

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage, i18n])

    useEffect(() => {
        window.addEventListener('resize', () => {
            setIsMobile(window.matchMedia('(max-width: 968px)').matches)
        })
    }, [])

    useEffect(() => {
        if (!isMobile) {
            setCount(false)
        }
    }, [isMobile])

    useEffect(() => {
        const handleClickOutside = (event) => {
            if (
                headerRef.current &&
                !headerRef.current.contains(event.target) &&
                event.target.className !== 'headerlangImg'
            ) {
                setIsLanguageOptionsOpen(false)
                setShowOtherImage(false)
            }
        }

        document.addEventListener('mousedown', handleClickOutside)
        return () => {
            document.removeEventListener('mousedown', handleClickOutside)
        }
    }, [])

    const handleSvgClick = () => {
        setShowOtherImage((prevState) => !prevState)
        setIsLanguageOptionsOpen((prevState) => !prevState)
    }

    const isHome = location.pathname
    console.log(isHome)

    const handleNavLinkClick = (path) => {
        if (path.id.startsWith('#')) {
            const section = document.querySelector(path.id)
            if (section) {
                section.scrollIntoView({ behavior: 'smooth' })
            }
        } else {
            navigate(path.id)
        }
        setCount(false)
    }

    const handleNavLinkOnFirstPage = (path) => {
        if (window.location.pathname !== '/') {
            navigate('/')
            setTimeout(() => {
                handleNavLinkClick(path)
            }, 1000)
        } else {
            handleNavLinkClick(path)
        }
    }

    const switchLanguage = () => {
        const newLanguage = selectedLanguage === 'ru' ? 'ky' : 'ru'
        setSelectedLanguage(newLanguage)
    }

    return (
        <header className="header" ref={headerRef}>
            <Container classNames="headerContainer">
                <Link to="/">
                    <img
                        src={logotype}
                        className="headerLogotype"
                        alt="logotype Triathlon Center"
                    />
                </Link>
                {!is404Error && (
                    <nav>
                        <ul
                            className={
                                isMobile
                                    ? count
                                        ? 'headerNav active'
                                        : 'headerNav'
                                    : 'headerNav'
                            }>
                            {navigatePath.map((path, index) => (
                                <li key={index}>
                                    {path.id.startsWith('/') ? (
                                        <Link
                                            target={
                                                path.id === '/schedule'
                                                    ? '_blank'
                                                    : '_self'
                                            }
                                            to={path.id}
                                            className="headerNavLink">
                                            {t(path.text)}
                                        </Link>
                                    ) : (
                                        <p
                                            className="headerNavLink"
                                            onClick={() =>
                                                handleNavLinkOnFirstPage(path)
                                            }>
                                            {t(path.text)}
                                        </p>
                                    )}
                                    {index === navigatePath.length - 1 && (
                                        <hr className="mobileSeparator" />
                                    )}
                                </li>
                            ))}
                            {count && (
                                <div className="headerAccountBurger">
                                    <img src={account} alt="account" />
                                </div>
                            )}
                        </ul>
                    </nav>
                )}
                <div className="headerWrapper">
                    {!count && (
                        <div
                            className={`headerLanguage ${
                                isLanguageOptionsOpen ? 'open' : 'closed'
                            }`}
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
                    {!is404Error && (
                        <div
                            onClick={() => setCount(!count)}
                            className="headerBurger">
                            {count ? (
                                <img src={close} alt="close" />
                            ) : (
                                <img src={burger} alt="burger" />
                            )}
                        </div>
                    )}
                    {location.pathname === '/vacancy' && (
                        <Link
                            to={`${location.pathname}#${navigatePath[2].id}`}
                            className="headerAccount">
                            <img src={account} alt="account" />
                        </Link>
                    )}
                    {location.pathname !== '/vacancy' && (
                        <Link
                            to="/personal-account"
                            target="_blank"
                            className="headerAccount">
                            <img src={account} alt="account" />
                        </Link>
                    )}
                </div>
            </Container>
        </header>
    )
}

export default Header
