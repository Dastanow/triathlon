import { useState, useEffect } from 'react'
import './TrainingAreasGroup.scss'
import CustomCarousel from '../../../UI/CustomCarousel'
import CustomTitle from '../../../UI/CustomTitle/CustomTitle'
import trainAreaService from '../../../Services/trainAreaService'

const TrainingAreasGroup = () => {
    const [trainingAreas, setTrainingAreas] = useState([])
    const slidesPerView = 1

    useEffect(() => {
        trainAreaService.get().then((data) => setTrainingAreas(data))
    }, [])

    if (!trainingAreas) return 'Loader...'

    return (
        <section className="train-areas">
            <div className="container">
                <div className="train-areas__title">
                    <CustomTitle title={'Тренировочные зоны'} />
                </div>
                <CustomCarousel
                    slidesPerView={slidesPerView}
                    dataArray={trainingAreas}
                />
            </div>
        </section>
    )
}

export default TrainingAreasGroup
