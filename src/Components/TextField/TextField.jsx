import './TextField.scss'
import errorIcon from '@assets/dangerous.svg'
import PropTypes from 'prop-types'
import { useState } from 'react'

export const TextField = ({
    name,
    value,
    onChange,
    placeholder,
    error,
}) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value});
    };  
    const [focused, setFocused] = useState(false);

    const handleBlur = () => {
        setFocused(true);
    };

    return (
        <div className="validate">
            <div className="error">
                <input 
                    type="text" 
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange} 
                    placeholder={placeholder}
                    className={`validate__input ${focused && error ? 'error' : ''}`}
                    onBlur={handleBlur}
                />
                {focused && error && <img src={errorIcon} className="error__icon" />}
            </div>
            {focused && error && <p className="error__text">{error}</p>}
        </div>
    )
}

TextField.defaultProps = {
    type: 'text',
};

TextField.propTypes = {
    name: PropTypes.string,
    type: PropTypes.string,
    value: PropTypes.string,
    onChange: PropTypes.func,
    error: PropTypes.string,
    placeholder: PropTypes.string,
};