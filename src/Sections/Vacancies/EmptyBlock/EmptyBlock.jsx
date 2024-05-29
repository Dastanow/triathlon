import { Link } from 'react-router-dom'
import './EmptyBlock.scss'
import { useTranslation } from 'react-i18next'

export const EmptyBlock = () => {
    const { t } = useTranslation()

    return (
        <div className="EmptyBlock" id="EmptyBlock">
            <p className="EmptyBlock__text">
                {t('noVacancies')}
            </p>
            <Link to="/" className="EmptyBlock__link">
                {t('toMain')}
            </Link>
        </div>
    )
}
