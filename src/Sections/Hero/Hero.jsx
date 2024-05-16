import { useState } from 'react'
import { CustomButton } from '@ui'
import { Container } from '@components'
import './Hero.scss'
import { useTranslation } from 'react-i18next'
import CustomModal from '@/UI/CustomModal/CustomModal'

export const Hero = () => {
    const [modalActive, setModalActive] = useState(false)

    const { t } = useTranslation()
    return (
        <section className="hero" id="hero">
            <Container classNames="heroContainer">
                <div className="heroContent">
                    <h1 className="heroContentTitle">TRIATHLON CENTER</h1>
                    <p className="heroContentDescription">
                        Первая инклюзивная спортивная база в Кыргызской
                        Республике
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
    )
}
