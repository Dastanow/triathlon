import * as React from 'react';
import styled from '@emotion/styled';


const InputComponent = ({
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
            <div>
        
                <input
                    ref={inputRef}
                    aria-label={name}
                    data-testid={name}
                    tabIndex={0}
                    type={type}
                    name={name}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                    className={className}
                />



            </div>
      
        </div>
    );
};

const Input = styled(InputComponent)`
  
  margin-right:1px
                    `;




export default Input;