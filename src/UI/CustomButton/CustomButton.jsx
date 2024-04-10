import * as React from 'react';
import PropTypes from 'prop-types';

const CustomButton = ({ className, name, onClick, type, value, form }) => {
    const inputRef = React.useRef(null);

    return (
        <div>
            <input
                ref={inputRef}
                type={type}
                name={name}
                onClick={onClick}
                value={value}
                className={className}
                form={form}
            />
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
    form: PropTypes.node,
    onChange: PropTypes.func,
    placeholder: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
};

export default CustomButton;
