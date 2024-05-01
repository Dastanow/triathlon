import { useState } from 'react'
import PropTypes from 'prop-types'
import './CommentCard.scss'

const CommentCard = (props) => {
    const { name, jobtitle, description, photo } = props
    const [isShow, setIsShow] = useState(true)
    const maxLength = 90

    const textElement = document.createElement('p')
    textElement.innerHTML = description
    const textContent = textElement.innerText || textElement.textContent

    const isHiddenText = textContent.length > maxLength && isShow

    const toggleText = () => {
        setIsShow(!isShow)
    }

    const trimmedText = isHiddenText
        ? textContent.slice(0, maxLength)
        : textContent

    return (
        <div className="comment-card">
            <img src={photo} alt={name} />
            <div className="comment-card__info comment-info">
                <p className="comment-info__name">{name}</p>
                <p className="comment-info__specialization">{jobtitle}</p>
                <p
                    className={`comment-info__text ${
                        !isShow ? ' comment-info__expanded-text' : ''
                    }`}
                    onClick={toggleText}>
                    {trimmedText}
                    <span> {isHiddenText ? '...ещё ' : ''}</span>
                </p>
            </div>
        </div>
    )
}

CommentCard.propTypes = {
    photo: PropTypes.string,
    name: PropTypes.string,
    jobtitle: PropTypes.string,
    description: PropTypes.string,
}

export default CommentCard
