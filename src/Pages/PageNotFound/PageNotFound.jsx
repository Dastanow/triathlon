import './style.scss'
import error from '../../Assets/Group 2.png'
import { Link } from 'react-router-dom'
import { useEffect, useState } from 'react'

const PageNotFound = () => {
    const [mobileVer, setMobileVer] = useState(
        window.matchMedia('(max-width: 768px)').matches,
    )

    useEffect(() => {
        window.addEventListener('resize', () => {
            setMobileVer(window.matchMedia('(max-width: 768px)').matches)
        })
    })

    return (
        <div className="error__container" id="error404">
            <div className="error__content">
                <div>
                    <h2>Ой-ой! Заблудились?</h2>
                    <p>
                        Не беспокойтесь, мы поможем! Вернитесь на стартовую
                        страницу и продолжим путь к спортивным достижениям
                        вместе!
                    </p>
                    {mobileVer ? (
                        <div className="error__image">
                            <img src={error} alt="img" />
                        </div>
                    ) : (
                        <></>
                    )}
                    <Link to="/">
                        <button>Назад</button>
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

export default PageNotFound