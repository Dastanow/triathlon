import PropTypes from 'prop-types';
import './ModalCoachCard.scss';
// import TextSplit from '../../../Components/TextSplit/TextSplit';

const ModalCoachCard = ({ coach }) => {
    if (!coach) return 'Loader...';
    // const text =
    //     'Это первое предложение. А это второе предложение. Ну и наконец на финише третье предложение.';

    const { photo, name, position, description } = coach;

    const textElement = document.createElement('p');
    textElement.innerHTML = description;
    const textContent = textElement.innerText || textElement.textContent;

    return (
        <div className="coach-modal-card">
            <img src={photo} alt={name} className="coach-modal-card__image" />

            <div className="coach-modal-card__info-block block-info">
                <div className="block-info__top">
                    <p className="block-info__top-name">{name}</p>
                    <p className="block-info__top-sertification">{position}</p>
                </div>
                <div className="block-info__bottom">
                    {/* <TextSplit
                        text={text}
                        textClass="block-info__bottom-description"
                    /> */}
                    <p className="block-info__bottom-description">
                        {textContent}
                    </p>
                </div>
            </div>
        </div>
    );
};

ModalCoachCard.propTypes = {
    coach: PropTypes.object,
};

export default ModalCoachCard;
