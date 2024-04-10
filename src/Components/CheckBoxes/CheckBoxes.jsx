import './CheckBoxes.scss'
import PropTypes  from 'prop-types'

const CheckBoxes = ({name, value, onChange, children, className}) => {
    const handleChange = () => {
        onChange({ name: name, value: !value})
    }
    return (
        <div>
            <div>
                <input  
                    className={className}
                    type="checkbox"
                    value=""
                    id={name}
                    onChange={handleChange}
                    checked={value}
                />
                <label htmlFor={name}>
                    {children}
                </label>
            </div>
        </div>
    );
};

CheckBoxes.propTypes = {
    name: PropTypes.string,
    value: PropTypes.bool,
    onChange: PropTypes.func,
    className: PropTypes.string,
    children: PropTypes.oneOfType([
        PropTypes.arrayOf(PropTypes.node),
        PropTypes.node
    ])
}

export default CheckBoxes