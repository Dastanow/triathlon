import * as React from 'react';
import PropTypes from 'prop-types'

const CustomButton = ({
    className,
    name,
    onClick,
    type,
    value,
    form,
}) => {
    const inputRef = React.useRef(null);

    return (
        <div>
            <input
                ref={inputRef}
                type={type}
                name={name}
                onCclick={onClick}
                value={value}
                className={className}
                form={form}
            />
        </div>
    );
};

CustomButton.defaultProps={
    type:'button'
}

CustomButton.propTypes={
    className:PropTypes.string,
    name:PropTypes.string,
    onChange:PropTypes.func,
    placeholder:PropTypes.string,
    type:PropTypes.string,
    value:PropTypes.string,
}

export default CustomButton;