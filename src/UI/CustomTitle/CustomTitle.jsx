import { useTranslation } from 'react-i18next'
import './CustomTitle.scss'
import PropTypes from 'prop-types'

export const CustomTitle = ({ title }) => {
    const { t } = useTranslation()
    return <h2 className="customTitle">{t(title)}</h2>
}

CustomTitle.propTypes = {
    title: PropTypes.string,
}
