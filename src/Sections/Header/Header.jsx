import { useState, useEffect } from 'react'
import './Header.scss'
import logotype from '../../Assets/logo1.png'
import account from '../../Assets/account.svg'
import chevron from '../../Assets/solar_chevron-up.svg'
import rus from '../../Assets/language_rus.png'
import kyr from '../../Assets/language_kyr.png'
import { Link } from 'react-router-dom'
import Container from '../../Components/Container/Container'
import { useTranslation } from 'react-i18next'

const navigatePath = [
    [{ text: 'path1', id: 'main' }],
    [{ text: 'path2', id: 'coaches' }],
    [{ text: 'path3', id: 'abonement' }],
    [{ text: 'path4', id: 'section' }],
    [{ text: 'path5' }],
    [{ text: 'path6', id: 'services' }],
    [{ text: 'path7', id: 'location' }],
]

const Header = () => {
    const { t, i18n } = useTranslation()
    const [selectedLanguage, setSelectedLanguage] = useState(
        localStorage.getItem('selectedLanguage') || i18n.language,
    )
    const [showOtherImage, setShowOtherImage] = useState(false)

    useEffect(() => {
        localStorage.setItem('selectedLanguage', selectedLanguage)
        console.log('Language saved to localStorage:', selectedLanguage) // Отладочный вывод
        i18n.changeLanguage(selectedLanguage)
    }, [selectedLanguage, i18n])

    const handleSvgClick = () => {
        setShowOtherImage((prevState) => !prevState)
    }

    const switchLanguage = () => {
        const newLanguage = selectedLanguage === 'rus' ? 'kyr' : 'rus'
        setSelectedLanguage(newLanguage)
    }

    console.log('Current selectedLanguage:', selectedLanguage) // Отладочный вывод

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
                            src={selectedLanguage === 'rus' ? rus : kyr}
                            alt={
                                selectedLanguage === 'rus'
                                    ? 'Russian'
                                    : 'Kyrgyz'
                            }
                        />
                        <img src={chevron} alt="Chevron" />
                        {showOtherImage && (
                            <div className="header-back">
                                <div
                                    className="headerOption"
                                    onClick={switchLanguage}>
                                    <img
                                        src={
                                            selectedLanguage === 'rus'
                                                ? kyr
                                                : rus
                                        }
                                        alt={
                                            selectedLanguage === 'rus'
                                                ? 'Kyrgyz'
                                                : 'Russian'
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
