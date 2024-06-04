import PropTypes from 'prop-types'
import errorIcon from '@assets/dangerous.svg'
import './CustomInput.scss'
import { useMask } from '@react-input/mask'

const CustomInput = ({
    type,
    onChange,
    value,
    placeholder,
    error,
    label,
    id,
}) => {
    const inputRef = useMask({
        mask: '+996 (___) ___-___',
        replacement: { _: /\d/ },
    })
    return (
        <div className={`customLabelForm ${error ? 'errorInput' : ''}`}>
            {type === 'textarea' ? (
                <textarea
                    className="customTextareaForm"
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />
            ) : type === 'checkbox' ? (
                <label htmlFor={id} className="customCheckboxForm">
                    <input
                        id={id}
                        type="checkbox"
                        onChange={onChange}
                        checked={value}
                    />
                    <span className="customCheckboxCheckmark" />
                    {label}
                </label>
            ) : type === 'phone' ? (
                <input
                    className="customInputForm"
                    type="text"
                    onChange={onChange}
                    placeholder={placeholder}
                    ref={inputRef}
                />
            ) : (
                <input
                    className="customInputForm"
                    type={type === 'email' ? 'email' : 'text'}
                    onChange={onChange}
                    placeholder={placeholder}
                    value={value}
                />
            )}
            {error && (
                <>
                    <img src={errorIcon} alt="Error Icon" />
                    <span>{error}</span>
                </>
            )}
        </div>
    )
}

CustomInput.propTypes = {
    type: PropTypes.oneOf(['default', 'email', 'phone', 'textarea', 'checkbox'])
        .isRequired,
    onChange: PropTypes.func.isRequired,
    value: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
    placeholder: PropTypes.string,
    error: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
}

export default CustomInput
