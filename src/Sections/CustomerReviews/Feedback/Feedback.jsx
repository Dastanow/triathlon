import './Feedback.scss';
import api from '../../../api';
import { feedbackInitState } from '../../../common/constants';
import CustomCarousel from '../../../UI/CustomCarousel';
import CustomTitle from  '../../../UI/CustomTitle/CustomTitle';

const Feedback = () => {
    const { gap, slidesPerView, commentClass } = feedbackInitState;
    const { comments } = api.comments.fetchAll();

    if (!comments) return 'Loading...';

    return (
        <section className="comments">
            <div className="container">
                <div className="comments__wrapper">
                    <CustomTitle title={'Отзывы наших клиентов'}/>
                    <h4 className="comments__subtitle">
                        Прочтите, что говорят о нас наши клиенты
                    </h4>
                    <CustomCarousel
                        gap={gap}
                        number={slidesPerView}
                        dataArray={comments}
                        classes={commentClass}
                    />
                </div>
            </div>
        </section>
    );
};

export default Feedback;
