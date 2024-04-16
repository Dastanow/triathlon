import { fetchAllComments } from '@app';
import './Feedback.scss';
import { CustomCarousel, CustomTitle } from '@ui';

const Feedback = () => {
    const { comments } = fetchAllComments();
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
