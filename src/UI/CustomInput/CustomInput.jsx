import * as React from 'react';


const InputCustom = ({
    className,
    name,
    onChange,
    placeholder,
    type,
    value,
}) => {
    const inputRef = React.useRef(null);

    return (
        <div className={className} >
            
        
            <input
                ref={inputRef}
                tabIndex={0}
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






export default InputCustom;