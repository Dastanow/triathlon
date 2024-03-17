import PropTypes from 'prop-types';
import './coaches.scss';

const ModalCoachCard = ({ coach }) => {
    if (!coach) return 'Loader...';

    const { image, alt, title, text1, text4, text5, text6 } = coach;

    return (
        <div className="coach-modal">
            <img src={image} alt={alt} className="coach-modal__image" />
            <div className="coach-modal__info-block info-block">
                <p className="info-block__name">{title}</p>
                <p className="info-block__sertification">{text1}</p>
                <p className="info-block__experience">{text4}</p>
                <p className="info-block__description">{text5}</p>
                <p className="info-block__description">{text6}</p>
            </div>
        </div>
    );
};

ModalCoachCard.propTypes = {
    coach: PropTypes.object,
};

export default ModalCoachCard;
