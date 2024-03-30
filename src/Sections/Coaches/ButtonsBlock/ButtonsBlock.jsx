import PropTypes from 'prop-types';
import './ButtonsBlock.scss';

const ButtonsBlock = (props) => {
    const { buttons, onChangeCoaches, activeBtn } = props;

    const getBtnClass = (name) => {
        return 'coaches__button' + (activeBtn === name ? ' active' : '');
    };

    return (
        <div className="coaches__buttons">
            {buttons.map((btn) => (
                <button
                    key={btn.id}
                    className={getBtnClass(btn.name)}
                    name={btn.name}
                    onClick={onChangeCoaches}
                >
                    {btn.text}
                </button>
            ))}
        </div>
    );
};

ButtonsBlock.propTypes = {
    buttons: PropTypes.array.isRequired,
    activeBtn: PropTypes.string,
    onChangeCoaches: PropTypes.func,
};

export default ButtonsBlock;
