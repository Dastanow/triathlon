import './Feedback.scss';
import api from '../../../api';
import CustomCarousel from '../../../UI/CustomCarousel';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
    const {t} = useTranslation();
    const { comments } = api.comments.fetchAll();
    const slidesPerView = 3;

    if (!comments) return 'Loading...';

    return (
        <section className="comments">
            <div className="container">
                <div className="comments__title">
                    <CustomTitle title={t('feedback')} />
                </div>
                <h4 className="comments__subtitle">
                   {t('feedbacktitle')}
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
