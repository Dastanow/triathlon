import PropTypes from 'prop-types'
import './ModalCoachCard.scss'

const ModalCoachCard = ({ coach }) => {
    if (!coach) return 'Loader...'

    const { photo, name, position, description } = coach

    // const textElement = document.createElement('p')
    // textElement.innerHTML = description
    // const textContent = textElement.innerText || textElement.textContent

    return (
        <div className="coach-modal-card">
            <img src={photo} alt={name} className="coach-modal-card__image" />
            <div className="coach-modal-card__info-block block-info">
                <div className="block-info__top">
                    <p className="block-info__top-name">{name}</p>
                    <p className="block-info__top-sertification">{position}</p>
                </div>
                <div className="block-info__bottom">
                    <div
                        className="block-info__bottom-description"
                        // style={{ background: 'transparent', color: '#fff' }}
                        dangerouslySetInnerHTML={{ __html: description }}
                    />
                </div>
            </div>
        </div>
    )
}

ModalCoachCard.propTypes = {
    coach: PropTypes.object,
}

export default ModalCoachCard
