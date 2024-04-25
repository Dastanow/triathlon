import { fetchAllComments } from '@app';
import './Feedback.scss';
import { CustomCarousel, CustomTitle } from '@ui';
import { useTranslation } from 'react-i18next';

const Feedback = () => {
    const {t} = useTranslation();
    const { comments } = fetchAllComments();
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
