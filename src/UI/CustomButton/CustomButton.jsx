import PropTypes from 'prop-types';
import './CustomButton.scss';

export const CustomButton = ({ type, onClick, children, className }) => {
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
    children: PropTypes.node,
    className: PropTypes.string
}

CustomButton.defaultProps = {
    onClick: () => {}
};