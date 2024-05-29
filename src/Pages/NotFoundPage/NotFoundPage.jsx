import './NotFoundPage.scss'
import error from '@assets/Group 2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { Header } from '@/Sections'

export const NotFoundPage = () => {
    const [mobileVer, setMobileVer] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileVer(window.matchMedia('(max-width: 768px)').matches)
        })
    })
    const { t } = useTranslation()

    return (
        <div className="error__container" id="error404">
            <Header/>
            <div className="error__content">
                <div>
                    <h2>{t('notFound')}</h2>
                    <p>{t('letsHelp')}</p>
                    {mobileVer ? (
                        <div className="error__image">
                            <img src={error} alt="img" />
                        </div>
                    ) : (
                        <></>
                    )}
                    <Link to="/">
                        <button>{t('back')}</button>
                    </Link>
                </div>
            </div>
            {!mobileVer ? (
                <div className="error__image">
                    <img src={error} alt="img" />
                </div>
            ) : (
                <></>
            )}
        </div>
    )
}

