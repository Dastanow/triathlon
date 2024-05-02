import './Requisites.scss'
import subscription from '../../../Assets/subscription.svg'
import { useTranslation } from 'react-i18next'

const Requisites = () => {
    const { t } = useTranslation()
    return (
        <div>
            <div className="logotype">
                <img className="logotype__icon" src={subscription} alt="icon" />
            </div>
            <div className="requisites">
                <label className="requisites__title">TRIATHLON CENTER</label>
                <p className="requisites__info">
            Для оплаты онлайн, пожалуйста, свяжитесь с отделом продаж для
            получения дополнительной информации о процессе онлайн-оплаты. </p>
                <div className="phone">
                    <div className="phone__reference">
                        <a className="phone__number-one" href="https://wa.me/996227000180" target="_blank">0(227) 00 01 80</a>
                        <a className="phone__number" href="https://wa.me/996997000180" target="_blank">0(997) 00 01 80</a>
                    </div>
                
                </div>
                <p className="payment">Если вы предпочитаете оплату наличными или картой,
                    вы можете подойти в Триатлон-Центр для совершения покупки.</p>
                <div className="location">
                    <span className="location__reference">{t('address')}</span>
                </div>
            </div>
        </div>
    )
}

export default Requisites