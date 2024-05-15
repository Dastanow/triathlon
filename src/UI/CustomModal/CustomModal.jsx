import PropTypes from 'prop-types';
import './CustomModal.scss';
import closeIcon from '@assets/close.svg';
import { useEffect } from 'react';
const CustomModal = ({ isOpen, close, children, className, title }) => {
    function disableScroll() {
        document.body.style.overflow = 'hidden';
    }
    function enableScroll() {
        document.body.style.overflow = 'auto';
    }
    useEffect(() => {
        if (isOpen) {
            disableScroll();
        } else {
            enableScroll();
        }
    }, [isOpen])
    
    return (
        <div className={`customModalOverlay ${isOpen ? '' : 'closeCustomModal'}`} onClick={close}>
            <div className={`customModalInner ${className}`} onClick={(e) => e.stopPropagation()}>
                <button className="customModalCloseBtn" onClick={close}>
                    <img src={closeIcon} alt="close" />
                </button>
                <h3>{title}</h3>
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
    title: PropTypes.string
};

export default CustomModal;
