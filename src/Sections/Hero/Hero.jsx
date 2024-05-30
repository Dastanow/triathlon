import { useEffect, useState } from 'react'
import { CustomButton } from '@ui'
import { Container } from '@components'
import './Hero.scss'
import background from '@assets/1background.png'
import { useTranslation } from 'react-i18next'
import CustomModal from '@/UI/CustomModal/CustomModal'
import { axiosAPI } from '@/App'

export const Hero = () => {
    const [modalActive, setModalActive] = useState(false)
    const [heroData, setHeroData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const { i18n } = useTranslation()

    const fetchData = async () => {
        try {
            await axiosAPI
                .get('/homepage/')
                .then((res) => setHeroData(res.data))
                .then(() => setIsLoading(false))
        } catch (error) {
            console.error('Error fetching data:', error)
        }
    }

    useEffect(() => {
        fetchData()
    }, [i18n.language])

    const { t } = useTranslation()

    return (
        <section className="hero" id="hero">
            <div className="heroVideo">
                {isLoading ? (
                    <img src={background} alt="background" />
                ) : (
                    <video src={heroData[0].photo} autoPlay muted loop></video>
                )}
            </div>
            {heroData.map((item, index) => (
                <span key={index}>
                    <Container classNames="heroContainer">
                        <div className="heroContent">
                            <h1
                                className="heroContentTitle"
                                data-text={item.title}>
                                {item.title}
                            </h1>
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
                </span>
            ))}
        </section>
    )
}
