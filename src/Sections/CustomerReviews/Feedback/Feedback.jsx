import './Feedback.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';

const Feedback = () => {
    const { comments } = api.comments.fetchAll();
    const slidesPerView = 3;

    if (!comments) return 'Loading...';

    return (
        <section className="comments">
            <div className="container">
                <div className="comments__title">
                    <CustomTitle title={'Отзывы наших клиентов'} />
                </div>
                <h4 className="comments__subtitle">
                    Прочтите, что говорят о нас наши клиенты
                </h4>
                <CustomCarousel
                    slidesPerView={slidesPerView}
                    dataArray={comments}
                />
            </div>
        </section>
    );
};

export default Feedback;
