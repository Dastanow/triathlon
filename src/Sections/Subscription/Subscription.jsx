import { axiosAPI } from '@/App'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'
import crown from '@assets/crown.svg'
import { Container } from '@components'
import { CustomButton, CustomTitle } from '@ui'
import { useEffect, useState } from 'react'
import { useTranslation } from 'react-i18next'
import { IoMdCheckmark, IoMdClose } from 'react-icons/io'
import 'swiper/css'
import 'swiper/css/free-mode'
import { FreeMode } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/react'
import Requisites from './Requisites/Requisites'
import './Subscription.scss'

export const Subscription = () => {
    const [modalActive, setModalActive] = useState(false)
    const [subsData, setSubsData] = useState()
    const [, , , , slidesPerView] = useInitStateCarousel()
    const { t, i18n } = useTranslation()

    const fetchSubscription = async () => {
        try {
            const response = await axiosAPI.get('abonements')
            setSubsData(response.data)
        } catch (e) {
            console.error('Error fetching data from abonements:', e)
            return { abonements: null }
        }
    }

    useEffect(() => {
        fetchSubscription()
    }, [i18n.language])

    return (
        <section className="subscription">
            <div id="subscription"></div>
            <Container classNames="subscriptionContainer">
                <div id="subscription_block">
                    <CustomTitle title={t('aboniment')} />
                </div>
                <ul className="subscriptionList">
                    <Swiper
                        slidesPerView={slidesPerView}
                        freeMode={true}
                        grabCursor={true}
                        modules={[FreeMode]}>
                        {subsData &&
                            subsData?.map((subscription, i) => (
                                <SwiperSlide key={i}>
                                    <li
                                        className={`subscriptionCard ${
                                            subscription.special
                                                ? 'prime'
                                                : 'default'
                                        }`}>
                                        <div className="subscriptionCardHeader">
                                            <div className="subscriptionCardTitle">
                                                <h5>{subscription.title}</h5>
                                                <p>{subscription.time}</p>
                                            </div>
                                            {subscription.special && (
                                                <span className="subscriptionCardHit">
                                                    <h5>Хит</h5>
                                                    <img
                                                        src={crown}
                                                        alt="хит"
                                                    />
                                                </span>
                                            )}
                                        </div>
                                        <div className="subscriptionCardActions">
                                            <h3>{subscription.price}</h3>
                                            <CustomButton
                                                onClick={() =>
                                                    setModalActive(true)
                                                }
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
                                                <div className="check">
                                                    {subscription.mark_freeze ? (
                                                        <IoMdCheckmark />
                                                    ) : (
                                                        <IoMdClose />
                                                    )}
                                                </div>
                                                {subscription.freeze}
                                            </li>
                                            <li>
                                                <div className="check">
                                                    {subscription.mark_trainer ? (
                                                        <IoMdCheckmark />
                                                    ) : (
                                                        <IoMdClose />
                                                    )}
                                                </div>
                                                {subscription.trainer}
                                            </li>
                                            <li>
                                                <div className="check">
                                                    {subscription.mark_guest ? (
                                                        <IoMdCheckmark />
                                                    ) : (
                                                        <IoMdClose />
                                                    )}
                                                </div>
                                                {subscription.guest}
                                            </li>
                                        </ul>
                                    </li>
                                </SwiperSlide>
                            ))}
                    </Swiper>
                </ul>
            </Container>
            <Requisites
                isOpen={modalActive}
                close={() => setModalActive(false)}
            />
        </section>
    )
}
