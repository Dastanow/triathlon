import PropTypes from 'prop-types';
import './CustomButton.scss';

const CustomButton = ({ type, onClick, children, className }) => {
    return (
        <button
            className={`btn 
                ${type === 'primary' ? 'btnPrimary' : ''} 
                ${type === 'secondary' ? 'btnSecondary' : ''} 
                ${className ? className : ''}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
};

CustomButton.propTypes = {
    type: PropTypes.oneOf(['primary', 'secondary']).isRequired,
    onClick: PropTypes.func,
    children: PropTypes.isRequired,
    className: PropTypes.string
}

CustomButton.defaultProps = {
    onClick: () => {}
};

export default CustomButton;
