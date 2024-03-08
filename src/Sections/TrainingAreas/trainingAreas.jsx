import './trainingAreas.scss';
import api from '../../api';
import CustomCarousel from '../../UI/CustomCarousel';

const TrainingAreas = () => {
    const gap = 0;
    const slidesPerView = 1;
    const { trainAreas, trainClasses } = api.data.fetchAll();

    if (!trainAreas && !trainClasses) return 'Loader...';

    return (
        <section className="train-areas">
            <div className="container">
                <div className="train-areas__wrapper">
                    <h2 className="train-areas__title">Тренировочные зоны</h2>
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={trainAreas}
                        classes={trainClasses}
                    />
                </div>
            </div>
        </section>
    );
};

export default TrainingAreas;
