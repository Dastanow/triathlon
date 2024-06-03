import { useState, useEffect, useRef } from 'react'
import './Header.scss'
import logotypeRu from '@assets/Triathlon center logo_ru.svg'
import logotypeKy from '@assets/Triathlon center logo_kg.svg'
import account from '@assets/account.svg'
import chevron from '@assets/solar_chevron-up.svg'
import ru from '@assets/language_rus.png'
import Map from '@assets/map.svg'
import Email from '@assets/email.svg'
import Instagram from '@assets/instagram.svg'
import Phone from '@assets/phone.svg'
import ky from '@assets/language_kyr.png'
import close from '@assets/close.svg'
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { Container } from '@components/Container/Container'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'

export const navigatePath = [
    { text: 'path1', id: '#main' },
    { text: 'path2', id: '#coaches' },
    { text: 'path3', id: '#subscription' },
    { text: 'path4', id: '#section' },
    { text: 'path5', id: '/schedule' },
    { text: 'path6header', id: '#ourServices' },
    { text: 'path7', id: '#location' },
]

export const Header = () => {
    const [count, setCount] = useState(false)
    const [isMobile, setIsMobile] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(i18n.language)
    const [contactsOpen, setContactsOpen] = useState(false)
    const [showOtherImage, setShowOtherImage] = useState(false)
    const [isLanguageOptionsOpen, setIsLanguageOptionsOpen] = useState(false)
    const headerRef = useRef(null)
    const navigate = useNavigate()
    const location = useLocation()
    const ref = useRef(null)
    const [phoneNumbers, setPhoneNumbers] = useState([])
    const [is404Error, setIs404Error] = useState(false)

    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('contacts')
            setPhoneNumbers(data)
        } catch (error) {
            console.error('Error fetching data from contacts:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [])

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
    const handleContactsClick = () => {
        setContactsOpen((prev) => !prev)
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
                    {i18n.language == 'ru' ? (
                        <img
                            src={logotypeRu}
                            className="headerLogotype"
                            alt="logotype Triathlon Center"
                        />
                    ) : (
                        <img
                            src={logotypeKy}
                            className="headerLogotype"
                            alt="logotype Triathlon Center"
                        />
                    )}
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
                                <div key={index} style={{ width: '100%' }}>
                                    <li>
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
                                                    handleNavLinkOnFirstPage(
                                                        path,
                                                    )
                                                }>
                                                {t(path.text)}
                                            </p>
                                        )}
                                    </li>
                                    {index === navigatePath.length - 1 && (
                                        <hr className="mobileSeparator" />
                                    )}
                                </div>
                            ))}
                            {count && (
                                <div className="headerAccountBurger">
                                    <img src={account} alt="account" />
                                    <div className="socials">
                                        <a
                                            href="https://www.google.com/maps/place/10+%D0%A4%D0%B0%D1%82%D1%8C%D1%8F%D0%BD%D0%BE%D0%B2%D0%B0,+Bishkek/@42.8600908,74.6056157,20.67z/data=!4m5!3m4!1s0x389eb632b000a38b:0xae646f5966b1033e!8m2!3d42.8601249!4d74.6056813?entry=ttu"
                                            target="_blank">
                                            <img src={Map} alt="map" />
                                        </a>
                                        <a
                                            href="mailto:triathloncenter.kg@gmail.com"
                                            target="_blank">
                                            <img src={Email} alt="email" />
                                        </a>
                                        <a
                                            href="https://www.instagram.com/triathloncenter.kg?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                                            target="_blank">
                                            <img
                                                src={Instagram}
                                                alt="instagram"
                                            />
                                        </a>
                                        <div
                                            ref={ref}
                                            className="contacts_mobile"
                                            onClick={
                                                contactsOpen
                                                    ? () =>
                                                          setContactsOpen(false)
                                                    : () =>
                                                          setContactsOpen(true)
                                            }>
                                            <img src={Phone} alt="Contact" />
                                            <div
                                                className={
                                                    contactsOpen
                                                        ? 'contactsShow active'
                                                        : 'contactsShow'
                                                }>
                                                <a
                                                    onClick={
                                                        handleContactsClick
                                                    }
                                                    href={`tel: ${phoneNumbers[0]?.first_number}`}>
                                                    {
                                                        phoneNumbers[0]
                                                            ?.first_number
                                                    }
                                                </a>
                                                <a
                                                    onClick={
                                                        handleContactsClick
                                                    }
                                                    href={`tel: ${phoneNumbers[0]?.second_number}`}>
                                                    {
                                                        phoneNumbers[0]
                                                            ?.second_number
                                                    }
                                                </a>
                                            </div>
                                        </div>
                                    </div>
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
                                <img src={close} alt="close-button" />
                            ) : (
                                <>
                                    <span></span>
                                    <span></span>
                                    <span></span>
                                </>
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
