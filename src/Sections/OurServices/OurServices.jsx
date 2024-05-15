import './OurServices.scss'
import { useState, useEffect } from 'react'
import { CustomTitle } from '@ui'
import { Container } from '@components'
import { useTranslation } from 'react-i18next'
import { axiosAPI } from '@/App'
import CustomModal from '@/UI/CustomModal/CustomModal'
import Form from '@/UI/CustomForm/FaqForm/FaqForm'

export const OurServices = () => {
    const [modalActive, setModalActive] = useState(false)

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
                                            onClick={() => setModalActive(true)}>
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
                <CustomModal
                    title={t('buttonHero')}
                    close={() => setModalActive(false)}
                    isOpen={modalActive}
                >
                    <Form
                        isOpen={modalActive}
                        type="leaveRequest"
                    />
                </CustomModal>
            </Container>
        </section>
    )
}
