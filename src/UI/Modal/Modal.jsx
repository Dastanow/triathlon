import PropTypes from 'prop-types';
import './modal.scss';
import { modalInitState } from '../../common/constants';

const Modal = ({ active, setActive, children }) => {
    const { image0, alt0 } = modalInitState;

    const getExternalFieldClass = () => {
        return active ? 'modal active' : 'modal';
    };
    const getInnerFieldClass = () => {
        return active ? 'modal__content active' : 'modal__content';
    };

    return (
        <div
            className={getExternalFieldClass()}
            onClick={() => setActive(false)}
        >
            <div
                className={getInnerFieldClass()}
                onClick={(e) => e.stopPropagation()}
            >
                <img
                    src={image0}
                    alt={alt0}
                    className="modal__content-close"
                    onClick={() => setActive(false)}
                />
                {children}
            </div>
        </div>
    );
};

Modal.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.object,
};

export default Modal;
