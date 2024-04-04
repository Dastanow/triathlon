import * as React from 'react';
import PropTypes from 'prop-types'

const CustomButton = ({
    className,
    name,
    onClick,
    type,
    value,
    form,
    title,
}) => {
    const inputRef = React.useRef(null);

    return (
        <div>
            <button
                ref={inputRef}
                type={type}
                name={name}
                onClick={onClick}
                value={value}
                className={className}
                form={form}
                >{title}</button>
               
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
    title:PropTypes.string,
}

export default CustomButton;