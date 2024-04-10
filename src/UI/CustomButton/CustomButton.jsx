import PropTypes from 'prop-types';

const CustomButton = ({
    className,
    name,
    onClick,
    type,
    value,
    form,
    title,
}) => {
    return (
        <div>
            <button
                type={type}
                name={name}
                onClick={onClick}
                value={value}
                className={className}
                form={form}
            >
                {title}
            </button>
        </div>
    );
};

CustomButton.defaultProps = {
    type: 'button',
};

CustomButton.propTypes = {
    className: PropTypes.string,
    name: PropTypes.string,
    onClick: PropTypes.func,
    form: PropTypes.func,
    type: PropTypes.string,
    value: PropTypes.string,
    title: PropTypes.string,
};

export default CustomButton;
