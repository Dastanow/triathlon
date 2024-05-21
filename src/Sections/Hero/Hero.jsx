import { useEffect, useState } from 'react'
import { CustomButton } from '@ui'
import { Container } from '@components'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
import CustomModal from '@/UI/CustomModal/CustomModal'
import { axiosAPI } from '@/App'

export const Hero = () => {
    const [modalActive, setModalActive] = useState(false)
    const [heroData, setHeroData] = useState([])
    const { i18n } = useTranslation()

    const fetchData = async () => {
        try {
            const { data } = await axiosAPI.get('/homepage/')
            setHeroData(data)
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    console.log(heroData)

    useEffect(() => {
        fetchData()
    }, [i18n.language])

    const { t } = useTranslation()

    return (
        <>
            {heroData.map((item, index) => (
                <section key={index} className="hero" id="hero">
                    <div className="heroVideo">
                        <video src={item.photo} autoPlay muted loop></video>
                    </div>
                    <Container classNames="heroContainer">
                        <div className="heroContent">
                            <h1 className="heroContentTitle">{item.title}</h1>
                            <p className="heroContentDescription">
                                {item.subtitle}
                            </p>
                            <CustomButton
                                type="secondary"
                                onClick={() => setModalActive(true)}>
                                {t('buttonHero')}
                            </CustomButton>
                        </div>
                    </Container>
                    <CustomModal
                        type="leaveRequest"
                        title={t('buttonHero')}
                        close={() => setModalActive(false)}
                        isOpen={modalActive}
                    />
                </section>
            ))}
        </>
    )
}
