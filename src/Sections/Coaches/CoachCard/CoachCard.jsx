import PropTypes from 'prop-types';
import './CoachCard.scss';

const CoachCard = (props) => {
    const { title, subtitle, image } = props;

    return (
        <div className="coach-card">
            <img src={image} alt={title} />
            <div className="coach-card__info coach-info">
                <p className="coach-info__name">{title}</p>
                <p className="coach-info__sertification">{subtitle}</p>
            </div>
        </div>
    );
};

CoachCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
};

export default CoachCard;
