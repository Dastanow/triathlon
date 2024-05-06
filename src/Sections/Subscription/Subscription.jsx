import { useEffect, useState } from 'react'
import { FaCheck } from 'react-icons/fa6'
import SubscriptionData from './SubscriptionData.json'
import { CustomTitle, CustomButton } from '@ui'
import ModalWindow from '@modules/ModalWindow'
import Requisites from './Requisites/Requisites'
import './Subscription.scss'
import { Container } from '@components'
import crown from '@assets/crown.svg'
import { useDispatch, useSelector } from 'react-redux'
import { useTranslation } from 'react-i18next'
import { toggleModal } from '@/store/modalSlice'

export const Subscription = () => {
    const [modalActive, setModalActive] = useState(false)
    const modalState = useSelector((state) => state.modal.isActive)
    const { t } = useTranslation()

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

    return (
        <section className="subscription" id="subscription">
            <Container classNames="subscriptionContainer">
                <CustomTitle title={t('aboniment')} />
                <ul className="subscriptionList">
                    {SubscriptionData.map((subscription) => (
                        <li
                            className={`subscriptionCard ${
                                subscription.prime ? 'prime' : 'default'
                            }`}
                            key={subscription.id}>
                            <div className="subscriptionCardHeader">
                                <div className="subscriptionCardTitle">
                                    <h5>{subscription.term}</h5>
                                    <p>{subscription.visits}</p>
                                </div>
                                {subscription.prime && (
                                    <span className="subscriptionCardHit">
                                        <h5>Хит</h5>
                                        <img
                                            src={crown}
                                            alt={subscription.visits}
                                        />
                                    </span>
                                )}
                            </div>
                            <div className="subscriptionCardActions">
                                <h3>{subscription.price}</h3>
                                <CustomButton
                                    onClick={() => handleOpenModal()}
                                    type={
                                        subscription.prime
                                            ? 'secondary'
                                            : 'primary'
                                    }>
                                    {t('buy')}
                                </CustomButton>
                                <hr />
                            </div>
                            <ul className="subscriptionCardItems">
                                <li>
                                    <FaCheck />
                                    {subscription.list.frost}
                                </li>
                                <li>
                                    <FaCheck />
                                    {subscription.list.workout}
                                </li>
                                <li>
                                    <FaCheck />
                                    {subscription.list.quest}
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
