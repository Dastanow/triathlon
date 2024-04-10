import { useState } from 'react';
import PropTypes from 'prop-types';
import './CommentCard.scss';

const CommentCard = (props) => {
    const { title, subtitle, text, image } = props;
    const [isShow, setIsShow] = useState(true);
    const maxLength = 90;

    const isHiddenText = text.length > maxLength && isShow;

    const toggleText = () => {
        setIsShow(!isShow);
    };

    const trimmedText = isHiddenText ? text.slice(0, maxLength) : text;

    return (
        <div className="comment-card">
            <img src={image} alt={title} />
            <div className="comment-card__info comment-info">
                <p className="comment-info__name">{title}</p>
                <p className="comment-info__specialization">{subtitle}</p>
                <p
                    className={`comment-info__text ${
                        !isShow ? ' comment-info__expanded-text' : ''
                    }`}
                    onClick={toggleText}
                >
                    {trimmedText}
                    <span> {isHiddenText ? '...ещё ' : ''}</span>
                </p>
            </div>
        </div>
    );
};

CommentCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
};

export default CommentCard;
