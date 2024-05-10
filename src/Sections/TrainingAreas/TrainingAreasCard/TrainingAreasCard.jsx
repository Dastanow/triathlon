import PropTypes from 'prop-types'
import './TrainingAreasCard.scss'
import InnerCarousel from '../InnerCarousel/InnerCarousel.jsx'

const TrainingAreasCard = (props) => {
    const { title, description, images } = props

    return (
        <div className="train-areas__card">
            <div className="train-areas__carousel-wrapper">
                <InnerCarousel slides={images} />
            </div>
            <div className="train-areas__info">
                <p className="train-areas__info-title">{title}</p>
                <div
                    className="train-areas__info-text"
                    dangerouslySetInnerHTML={{ __html: description }}
                />
            </div>
        </div>
    )
}

TrainingAreasCard.propTypes = {
    images: PropTypes.array,
    title: PropTypes.string,
    description: PropTypes.string,
}

export default TrainingAreasCard
