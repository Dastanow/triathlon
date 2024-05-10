import './OurServices.scss'
import ModalWindow from '../../Modules/ModalWindow'
import { useState, useEffect } from 'react'
import { CustomTitle } from '@ui'
import { Container } from '@components'
import ApplicationForm from '@/UI/CustomForm/ApplicationForm/ApplicationForm'
import { toggleModal } from '@/store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'

export const OurServices = () => {
    const [modalActive, setModalActive] = useState(false)
    const modalState = useSelector((state) => state.modal.isActive)

    const dispatch = useDispatch()
    const handleOpenModal = () => {
        dispatch(toggleModal(true))
        setModalActive(true)
    }

    useEffect(() => {
        if (!modalState) {
            setModalActive(false)
        }
    }, [modalState])

    const [servicesData, setServicesData] = useState([])
    const { t, i18n } = useTranslation()

    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('offering')
            setServicesData(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [i18n.language])

    return (
        <section className="ourServices" id="ourServices">
            <Container classNames="ourServicesContainer">
                <CustomTitle title={t('path6')} />
                <div className="ourServicesCards">
                    {servicesData
                        .filter((card) => card.id)
                        .map((card) => {
                            return (
                                <div key={card.id} className="ourServicesCard">
                                    <div className="ourServicesCardContent">
                                        <h5 className="ourServicesCardLabel">
                                            {card.title}
                                        </h5>
                                        <button
                                            className="ourServicesCardButton"
                                            onClick={() => handleOpenModal()}>
                                            {t('findOutMore')}
                                        </button>
                                    </div>
                                    <img
                                        src={card.image && card.image.icon}
                                        alt="icon"
                                        className="ourServicesCardImg"
                                    />
                                </div>
                            )
                        })}
                </div>
                {modalActive && (
                    <ModalWindow>
                        <ApplicationForm />
                    </ModalWindow>
                )}
            </Container>
        </section>
    )
}
