import { useState } from 'react';
import { CustomButton } from '@ui';
import { Container } from '@components';
import ModalWindow from '../../Modules/ModalWindow';
import './Hero.scss';
import { useTranslation } from 'react-i18next';
import ApplicationForm from '@/UI/CustomForm/ApplicationForm/ApplicationForm';
import { toggleModal } from '@/store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'

export const Hero = () => {
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
                        onClick={() => handleOpenModal()}>
                        {t('buttonHero')}
                    </CustomButton>
                </div>
            </Container>
            {modalActive && (
                <ModalWindow>
                    <ApplicationForm/>
                </ModalWindow>
            )}
        </section>
    )
}
