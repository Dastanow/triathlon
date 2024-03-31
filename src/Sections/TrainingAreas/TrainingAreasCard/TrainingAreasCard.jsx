import PropTypes from 'prop-types';
import './TrainingAreasCard.scss';
import InnerCarousel from '../InnerCarousel/InnerCarousel.jsx';

const TrainingAreasCard = (props) => {
    const { title, text, slide } = props;

    return (
        <div className="train-areas__card">
            <div className="train-areas__carousel-wrapper">
                <InnerCarousel slide={slide} />
            </div>
            <div className="train-areas__info">
                <p className="train-areas__info-title">{title}</p>
                <p className="train-areas__info-text">{text}</p>
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
