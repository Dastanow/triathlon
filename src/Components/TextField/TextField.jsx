import './TextField.scss'
import errorIcon from '../../Assets/dangerous.svg'
import PropTypes from 'prop-types'

const TextField = ({
    name,
    value,
    onChange,
    placeholder,
    error,
    className,
}) => {

    const handleChange = ({ target }) => {
        onChange({ name: target.name, value: target.value});
    };  

    return (
        <div>
            <div className="error">
                <input 
                    type="text" 
                    id={name}
                    name={name}
                    value={value}
                    onChange={handleChange} 
                    placeholder={placeholder}
                    className={className}
                />
                {/* {error && <img src={errorIcon} className="error__icon" />} */}
          
            </div>
            {/* {error && <p className="error__text">{error}</p>} */}
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
    className: PropTypes.string,
};

export default TextField