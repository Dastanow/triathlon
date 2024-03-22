import PropTypes from 'prop-types';
import './style.scss';

const CustomSlideCard = ({
    image,
    title,
    subtitle,
    text,
    class1,
    class2,
    class3,
    class4,
    class5,
}) => {
    return (
        <div className={class1}>
            <img src={image} alt={title} />
            <div className={class2}>
                <p className={class3}>{title}</p>
                <p className={class4}>{subtitle}</p>
                <p className={class5}>{text}</p>
            </div>
        </div>
    );
};

CustomSlideCard.propTypes = {
    image: PropTypes.string,
    title: PropTypes.string,
    subtitle: PropTypes.string,
    text: PropTypes.string,
    class1: PropTypes.string,
    class2: PropTypes.string,
    class3: PropTypes.string,
    class4: PropTypes.string,
    class5: PropTypes.string,
};

export default CustomSlideCard;
