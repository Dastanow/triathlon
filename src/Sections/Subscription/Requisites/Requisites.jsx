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
    const { i18n } = useTranslation()
    const [contactData, setContactData] = useState([])
    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('payment')
            setContactData(data)
        } catch (error) {
            console.error('Error data:', error)
        }
    }
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
                {contactData.map((info, id) => (
                    <div key={id}>
                        <p
                            className="payment"
                            dangerouslySetInnerHTML={{ __html: info.disc }}></p>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Requisites
