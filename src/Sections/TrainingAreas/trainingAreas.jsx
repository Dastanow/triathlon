import './style.scss';
import api from '../../api';
import CustomCarousel from '../../UI/CustomCarousel';
import { trainAreasInitState } from '../../common/constants';

const TrainingAreas = () => {
    const { gap, slidesPerView, trainClass } = trainAreasInitState;
    const { trainAreas } = api.trainAreas.fetchAll();

    if (!trainAreas) return 'Loader...';

    return (
        <section className="train-areas">
            <div className="container">
                <div className="train-areas__wrapper">
                    <h2 className="train-areas__title">Тренировочные зоны</h2>
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={trainAreas}
                        classes={trainClass}
                    />
                </div>
            </div>
        </section>
    );
};

export default TrainingAreas;
