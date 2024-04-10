import './TrainingAreasGroup.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';

const TrainingAreasGroup = () => {
    const slidesPerView = 1;
    const { trainAreas } = api.trainAreas.fetchAll();

    if (!trainAreas) return 'Loader...';

    return (
        <section className="train-areas">
            <div className="container">
                <div className="train-areas__title">
                    <CustomTitle title={'Тренировочные зоны'} />
                </div>
                <CustomCarousel
                    slidesPerView={slidesPerView}
                    dataArray={trainAreas}
                />
            </div>
        </section>
    );
};

export default TrainingAreasGroup;
