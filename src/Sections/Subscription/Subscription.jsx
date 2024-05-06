import { useEffect, useState } from 'react'
import { CustomTitle, CustomButton } from '@ui'
import ModalWindow from '@modules/ModalWindow'
import Requisites from './Requisites/Requisites'
import './Subscription.scss'
import { Container } from '@components'
import crown from '@assets/crown.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toggleModal } from '@/store/modalSlice'
import { axiosAPI } from '@/App'

export const Subscription = () => {
    const [modalActive, setModalActive] = useState(false)
    const [subsData, setSubsData] = useState()
    const modalState = useSelector((state) => state.modal.isActive)
    const { t, i18n } = useTranslation()

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
    const funcGet = async () => {
        try {
            const res = await axiosAPI.get(
                'abonements',
            )
            setSubsData(res.data)
            console.log(res)
        } catch (err) {
            console.log(err, 'error in subscription')
        }
    }
    useEffect(() => {
        funcGet()
    }, [i18n.language])

    return (
        <section className="subscription" id="subscription">
            <Container classNames="subscriptionContainer">
                <CustomTitle title={t('aboniment')} />
                <ul className="subscriptionList">
                    {subsData &&
                        subsData.map((subscription) => (
                            <li
                                className={`subscriptionCard ${
                                    subscription.special ? 'prime' : 'default'
                                }`}
                                key={subscription.id}>
                                <div className="subscriptionCardHeader">
                                    <div className="subscriptionCardTitle">
                                        <h5>{subscription.title}</h5>
                                        <p>{subscription.time}</p>
                                    </div>
                                    {subscription.special && (
                                        <span className="subscriptionCardHit">
                                            <h5>Хит</h5>
                                            <img src={crown} alt="хит" />
                                        </span>
                                    )}
                                </div>
                                <div className="subscriptionCardActions">
                                    <h3>{subscription.price}</h3>
                                    <CustomButton
                                        onClick={() => handleOpenModal()}
                                        type={
                                            subscription.special
                                                ? 'secondary'
                                                : 'primary'
                                        }>
                                        {t('buy')}
                                    </CustomButton>
                                    <hr />
                                </div>
                                <ul className="subscriptionCardItems">
                                    <li>
                                        <p>{subscription.mark_freeze}</p>
                                        {subscription.freeze}
                                    </li>
                                    <li>
                                        <p>{subscription.mark_trainer}</p>
                                        {subscription.trainer}
                                    </li>
                                    <li>
                                        <p>{subscription.mark_guest}</p>
                                        {subscription.guest}
                                    </li>
                                </ul>
                            </li>
                        ))}
                </ul>
            </Container>
            {modalActive && (
                <ModalWindow>
                    <Requisites />
                </ModalWindow>
            )}
        </section>
    )
}
