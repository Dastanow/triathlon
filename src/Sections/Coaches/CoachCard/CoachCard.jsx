import PropTypes from 'prop-types';
import './CoachCard.scss';

const CoachCard = (props) => {
    const { name, position, photo } = props;

    return (
        <div className="coach-card">
            <img src={photo} alt={name} />
            <div className="coach-card__info coach-info">
                <p className="coach-info__name">{name}</p>
                <p className="coach-info__sertification">{position}</p>
            </div>
        </div>
    );
};

CoachCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    position: PropTypes.string,
};

export default CoachCard;
