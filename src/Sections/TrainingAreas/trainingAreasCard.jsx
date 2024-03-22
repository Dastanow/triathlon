import PropTypes from 'prop-types';
import InnerCarousel from './innerCarousel';

const TrainingAreasCard = ({ title, text, slide }) => {
    return (
        <div className="train-areas__card">
            <div className="train__carousel-wrapper">
                <InnerCarousel slide={slide} />
            </div>
            <div className="train-areas__overlay">
                <p className="card__title">{title}</p>
                <p className="card__text">{text}</p>
            </div>
        </div>
    );
};

TrainingAreasCard.propTypes = {
    slide: PropTypes.array,
    title: PropTypes.string,
    text: PropTypes.string,
};

export default TrainingAreasCard;
