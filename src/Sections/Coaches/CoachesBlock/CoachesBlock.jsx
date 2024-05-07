import { useEffect, useState } from 'react'
import './CoachesBlock.scss'
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx'
import { CustomTitle, CustomCarousel } from '@/UI'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'
import buttonService from '@/Services/buttonService'
import coachService from '@/Services/coachService'
import { useTranslation } from 'react-i18next'

const CoachesBlock = () => {
    const [coaches, setCoaches] = useState([])
    const [buttons, setButtons] = useState([])
    const [curGroup, setCurGroup] = useState([])
    const [activeBtn, setActiveBtn] = useState(null)
    const [swiperInstance, setSwiperInstance] = useState(null)
    const [, slidesPerView] = useInitStateCarousel()
    const { t } = useTranslation()

    useEffect(() => {
        buttonService.get().then((data) => setButtons(data))
        coachService.get().then((data) => {
            setCoaches(data)
            setCurGroup(data)
        })
    }, [])

    const handleChangeCoaches = ({ target }) => {
        setActiveBtn(target.name)
        const newGroup = coaches.filter(
            (coach) => coach.type_of_trainer.name === target.name,
        )
        setCurGroup(newGroup)
        if (swiperInstance) {
            swiperInstance.slideTo(0)
        }
    }

    if (!coaches && !buttons) return 'Loader...'

    return (
        <section className="coaches" id="coaches">
            <div className="container">
                <div className="coaches__title">
                    <CustomTitle title={t('coaches')} />
                </div>
                <ButtonsBlock
                    buttons={buttons}
                    onChangeCoaches={handleChangeCoaches}
                    activeBtn={activeBtn}
                />
                <CustomCarousel
                    dataArray={curGroup}
                    slidesPerView={slidesPerView}
                    onSwiper={setSwiperInstance}
                />
            </div>
        </section>
    )
}

export default CoachesBlock
