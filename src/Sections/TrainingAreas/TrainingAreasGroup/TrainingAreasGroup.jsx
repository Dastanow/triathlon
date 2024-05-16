import { useState, useEffect } from 'react'
import './TrainingAreasGroup.scss'
import { CustomCarousel, CustomTitle } from '@/UI'
import trainAreaService from '@/Services/trainAreaService'
import { useTranslation } from 'react-i18next'

const TrainingAreasGroup = () => {
    const [trainingAreas, setTrainingAreas] = useState([])
    const { t, i18n } = useTranslation()
    const slidesPerView = 1

    useEffect(() => {
        trainAreaService.get().then((data) => setTrainingAreas(data))
    }, [i18n.language])

    if (trainingAreas.length === 0) return 'Loader...'

    return (
        <section className="train-areas" id="train-areas">
            <div className="container">
                <div className="train-areas__title">
                    <CustomTitle title={t('trainingAreas')} />
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
