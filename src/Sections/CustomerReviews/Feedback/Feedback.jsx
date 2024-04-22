import { useEffect, useState } from 'react';
import './Feedback.scss';
import CustomCarousel from '../../../UI/CustomCarousel';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';
import commentService from '../../../Services/commentService';

const Feedback = () => {
    const [comments, setComments] = useState([]);
    const slidesPerView = 3;

    useEffect(() => {
        commentService.get().then((data) => setComments(data));
    }, []);

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
