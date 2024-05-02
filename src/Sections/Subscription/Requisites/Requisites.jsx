import './Requisites.scss'
import subscription from '@assets/subscription.svg'
import modalSvg from '@assets/modalka.svg'
import { useDispatch } from 'react-redux'
import { toggleModal } from '@/store/modalSlice'

const Requisites = () => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(toggleModal(false))
    }
    return (
        <div className="requisites_block">
            <div className="logotype">
                <img className="logotype__icon" src={subscription} alt="icon" />
                <img
                    src={modalSvg}
                    onClick={() => handleCloseModal()}
                    className="modal-blockk__cross"
                    alt="reset"
                />
            </div>
            <div className="requisites">
                <label className="requisites__title">TRIATHLON CENTER</label>
                <p className="requisites__info">
                    Для оплаты онлайн, пожалуйста, свяжитесь с отделом продаж
                    для получения дополнительной информации о процессе
                    онлайн-оплаты.{' '}
                </p>
                <div className="phone">
                    <div className="phone__reference">
                        <a
                            className="phone__number-one"
                            href="https://wa.me/996227000180"
                            target="_blank">
                            0(227) 00 01 80
                        </a>
                        <a
                            className="phone__number"
                            href="https://wa.me/996997000180"
                            target="_blank">
                            0(997) 00 01 80
                        </a>
                    </div>
                </div>
                <p className="payment">
                    Если вы предпочитаете оплату наличными или картой, вы можете
                    подойти в Триатлон-Центр для совершения покупки.
                </p>
                <div className="location">
                    <span className="location__reference">
                        Ул. Фатьянова 10, Школа №69 им. Т. Сатылганова
                    </span>
                </div>
            </div>
        </div>
    )
}

export default Requisites
