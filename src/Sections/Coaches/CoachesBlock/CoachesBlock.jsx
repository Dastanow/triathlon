import { useEffect, useState } from 'react'
import './CoachesBlock.scss'
import ButtonsBlock from '../ButtonsBlock/ButtonsBlock.jsx'
import { CustomTitle, CustomCarousel } from '@/UI'
import useInitStateCarousel from '@/hooks/useInitStateCarousel'
import buttonService from '@/Services/buttonService'
import coachService from '@/Services/coachService'

const CoachesBlock = () => {
    const [coaches, setCoaches] = useState([])
    const [buttons, setButtons] = useState([])
    const [curGroup, setCurGroup] = useState([])
    const [activeBtn, setActiveBtn] = useState(null)
    const [, slidesPerView] = useInitStateCarousel()

    useEffect(() => {
        buttonService.get().then((data) => setButtons(data))
    }, [])

    useEffect(() => {
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
    }

    if (!coaches && !buttons) return 'Loader...'

    return (
        <section className="coaches" id="coaches">
            <div className="container">
                <div className="coaches__title">
                    <CustomTitle title={'Наши тренеры'} />
                </div>
                <ButtonsBlock
                    buttons={buttons}
                    onChangeCoaches={handleChangeCoaches}
                    activeBtn={activeBtn}
                />
                <CustomCarousel
                    dataArray={curGroup}
                    slidesPerView={slidesPerView}
                />
            </div>
        </section>
    )
}

export default CoachesBlock
