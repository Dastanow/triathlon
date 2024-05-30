import { Link } from 'react-router-dom'
import './EmptyBlock.scss'
import { useTranslation } from 'react-i18next'

export const EmptyBlock = () => {
    const { t } = useTranslation()

    return (
        <div className="EmptyBlock" id="EmptyBlock">
            <div className="container">
                <p className="EmptyBlock__text">{t('noVacancies')}</p>
                <Link to="/" className="EmptyBlock__link">
                    {t('toMain')}
                </Link>
            </div>
        </div>
    )
}
