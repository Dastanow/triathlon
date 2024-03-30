import './TrainingAreasGroup.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import { trainAreasInitState } from '../../../common/constants';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';

const TrainingAreasGroup = () => {
    const { gap, slidesPerView, trainClass } = trainAreasInitState;
    const { trainAreas } = api.trainAreas.fetchAll();

    if (!trainAreas) return 'Loader...';

    return (
        <section className="train-areas">
            <div className="container">
                <div className="train-areas__wrapper">
                    <div className="train-areas__title">
                        <CustomTitle title={'Тренировочные зоны'}/>
                    </div>
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

export default TrainingAreasGroup;
