import PropTypes from 'prop-types';
import './style.scss';

const ModalCoachCard = ({ coach }) => {
    if (!coach) return 'Loader...';

    const { image, title, subtitle, text } = coach;

    return (
        <div className="coach-modal">
            <img src={image} alt={title} className="coach-modal__image" />
            <div className="coach-modal__info-block info-block">
                <div className="info-block__top">
                    <p className="info-block__top-name">{title}</p>
                    <p className="info-block__top-sertification">{subtitle}</p>
                </div>
                <div className="info-block__bottom">
                    <p className="info-block__bottom-description">{text}</p>
                </div>
            </div>
        </div>
    );
};

ModalCoachCard.propTypes = {
    coach: PropTypes.object,
};

export default ModalCoachCard;
