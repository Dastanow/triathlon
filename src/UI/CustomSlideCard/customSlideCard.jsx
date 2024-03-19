import PropTypes from 'prop-types';
import './style.scss';

const CustomSlideCard = ({
    image,
    alt,
    title,
    text1,
    text2,
    text3,
    class1,
    class2,
    class3,
    class4,
    class5,
}) => {
    return (
        <div className={class1}>
            <img src={image} alt={alt} />
            <div className={class2}>
                <p className={class3}>{title}</p>
                <p className={class4}>{text1}</p>
                <p className={class5}>{text2}</p>
                <p className={class5}>{text3}</p>
            </div>
        </div>
    );
};

CustomSlideCard.propTypes = {
    image: PropTypes.string,
    alt: PropTypes.string,
    title: PropTypes.string,
    text1: PropTypes.string,
    text2: PropTypes.string,
    text3: PropTypes.string,
    class1: PropTypes.string,
    class2: PropTypes.string,
    class3: PropTypes.string,
    class4: PropTypes.string,
    class5: PropTypes.string,
};

export default CustomSlideCard;
