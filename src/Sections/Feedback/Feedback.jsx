import './style.scss';
import api from '../../api';
import { feedbackInitState } from '../../common/constants';
import CustomCarousel from '../../UI/CustomCarousel';

const Feedback = () => {
    const { gap, slidesPerView, commentClasses } = feedbackInitState;
    const { comments } = api.comments.fetchAll();

    if (!comments) return 'Loading...';

    return (
        <section className="comments">
            <div className="container">
                <div className="comments__wrapper">
                    <h2 className="comments__title">Отзывы наших клиентов</h2>
                    <h4 className="comments__subtitle">
                        Прочтите, что говорят о нас наши клиенты
                    </h4>
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={comments}
                        classes={commentClasses}
                    />
                </div>
            </div>
        </section>
    );
};

export default Feedback;
