import './Requisites.scss'
import subscription from '../../../Assets/subscription.svg'
import modalSvg from '@assets/modalka.svg'
import { useDispatch } from 'react-redux'
import { toggleModal } from '@/store/modalSlice'
import { useTranslation } from 'react-i18next'
import { useEffect, useState } from 'react'
import { axiosAPI } from '@/App'

const Requisites = () => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(toggleModal(false))
    }
    const { t, i18n } = useTranslation()
    const [ contactData, setContactData ] = useState([])
    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('contacts');
            setContactData(data);
        } catch (error) {
            console.error('Error data:', error);
        }
    };
    useEffect(() => {
        fetchData()
    }, [i18n.language]) 


    return (
        <div className="requisites_block">
            <div className="logotype">
                <img className="logotype__icon" src={subscription} alt="icon" />
                <img
                    src={modalSvg}
                    onClick={() => handleCloseModal()}
                    className="modal-payment__cross"
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
                {contactData.map(info => (
                    <div>
                        <div className="phone">
                            <div className="phone__reference">
                                <a
                                    className="phone__number-one"
                                    href="https://wa.me/996227000180"
                                    target="_blank">
                                    {info.first_number}
                                </a>
                                <a
                                    className="phone__number"
                                    href="https://wa.me/996997000180"
                                    target="_blank">
                                    {info.second_number}
                                </a>
                            </div>
                        </div>
                        <p className="payment">
                    Если вы предпочитаете оплату наличными или картой, вы можете
                    подойти в Триатлон-Центр для совершения покупки.
                        </p>
                        <div className="location">
                            <p className="location__reference">{info.address}</p>
                        </div>
                    </div>
                ))}
                
            </div>
        </div>
    )
}

export default Requisites
