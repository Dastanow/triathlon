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
        <>
            <Header />
            <div className="error__container" id="error404">
                <div className="error__content">
                    <div>
                        <h1>{t('notFound')}</h1>
                        <p>{t('letsHelp')}</p>
                        {mobileVer && (
                            <div className="error__image">
                                <img src={error} alt="img" />
                            </div>
                        )}
                        <Link to="/">
                            <button>{t('back')}</button>
                        </Link>
                    </div>
                </div>
                {!mobileVer && (
                    <div className="error__image">
                        <img src={error} alt="img" />
                    </div>
                )}
            </div>
        </>
    )
}
