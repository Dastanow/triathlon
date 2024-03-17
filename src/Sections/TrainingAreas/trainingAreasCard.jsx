import PropTypes from 'prop-types';
import './trainingAreas.scss';
import InnerCarousel from './innerCarousel';

const TrainingAreasCard = ({ title, text1, text2, text3, slide }) => {
    return (
        <div className="train-areas__card">
            <div className="train__carousel-wrapper">
                <InnerCarousel slide={slide} />
            </div>
            <div className="train-areas__overlay">
                <p className="card__title">{title}</p>
                <p className="card__text">{text1}</p>
                <p className="card__text">{text2}</p>
                <p className="card__text">{text3}</p>
            </div>
        </div>
    );
};

TrainingAreasCard.propTypes = {
    slide: PropTypes.array,
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
};

export default TrainingAreasCard;
