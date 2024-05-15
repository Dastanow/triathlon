import PropTypes from 'prop-types';
import './CustomModal.scss';
import closeIcon from '@assets/close.svg';
const CustomModal = ({ isOpen, close, children, className }) => {
    return (
        <div className={`customModalOverlay ${isOpen ? '' : 'closeCustomModal'}`} onClick={close}>
            <div className={`customModalInner ${className}`} onClick={(e) => e.stopPropagation()}>
                <button className="customModalCloseBtn" onClick={close}>
                    <img src={closeIcon} alt="close" />
                </button>
                {children}
            </div>
        </div>
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    children: PropTypes.node.isRequired,
    className: PropTypes.string,
};

export default CustomModal;
