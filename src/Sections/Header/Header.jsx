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
    [{ text: 'path5' }],
    [{ text: 'path6', id: 'services' }],
    [{ text: 'path7', id: 'location' }],
]

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
        setShowOtherImage((prevState) => !prevState)
    }

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
                                        return (
                                            <p key={id}>
                                                <a
                                                    className="headerNavLink"
                                                    href={`#${item.id}`}>
                                                    {' '}
                                                    {t(item.text)}
                                                </a>
                                            </p>
                                        )
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
                        <img src={account} alt="account" />
                    </div>
                </div>
            </Container>
        </header>
    )
}

export default Header
