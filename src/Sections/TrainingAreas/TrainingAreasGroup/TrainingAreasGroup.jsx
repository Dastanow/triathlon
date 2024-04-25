import { fetchAllTrains } from '@app';
import './TrainingAreasGroup.scss';
import { CustomCarousel, CustomTitle } from '@ui';

const TrainingAreasGroup = () => {
    const slidesPerView = 1;
    const { trainAreas } = fetchAllTrains();

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
