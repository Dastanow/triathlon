import * as React from 'react';
import PropTypes from 'prop-types'

const CustomInput = ({
    className,
    name,
    onChange,
    placeholder,
    type,
    value,
}) => {
    const inputRef = React.useRef(null);

    return (
        <div>
            <input
                ref={inputRef}
                type={type}
                name={name}
                onChange={onChange}
                placeholder={placeholder}
                value={value}
                className={className}
            />
        </div>
    );
};

CustomInput.defaultProps={
    type:'text'
}

CustomInput.propTypes={
    className:PropTypes.string,
    name:PropTypes.string,
    onChange:PropTypes.func,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    value:PropTypes.string,
}

export default CustomInput;