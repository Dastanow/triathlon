import PropTypes from 'prop-types';
import './ModalCoachCard.scss';

const ModalCoachCard = ({ coach }) => {
    if (!coach) return 'Loader...';

    const { image, title, subtitle, text } = coach;

    return (
        <div className="coach-modal-card">
            <img src={image} alt={title} className="coach-modal-card__image" />
            <div className="coach-modal-card__info-block block-info">
                <div className="block-info__top">
                    <p className="block-info__top-name">{title}</p>
                    <p className="block-info__top-sertification">{subtitle}</p>
                </div>
                <div className="block-info__bottom">
                    <p className="block-info__bottom-description">{text}</p>
                </div>
            </div>
        </div>
    );
};

ModalCoachCard.propTypes = {
    coach: PropTypes.object,
};

export default ModalCoachCard;
