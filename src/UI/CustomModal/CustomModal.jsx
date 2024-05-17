import PropTypes from 'prop-types';
import './CustomModal.scss';
import closeIcon from '@assets/close.svg';
import { useEffect, useState } from 'react';
import Form from '../Form/Form';
const CustomModal = ({ isOpen, close, className, title, type }) => {
    const [isSuccess, setIsSuccess] = useState(false);
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
            setIsSuccess(false)
            enableScroll();
        }
    }, [isOpen])
    
    return (
        <div className={`customModalOverlay ${isOpen ? '' : 'closeCustomModal'}`} onClick={close}>
            <div className={`customModalInner ${className} ${isSuccess ? 'isSuccess' : ''}`} onClick={(e) => e.stopPropagation()}>
                <button className="customModalCloseBtn" onClick={close}>
                    <img src={closeIcon} alt="close" />
                </button>
                {!isSuccess && <h3>{title}</h3>}
                <Form type={type} setIsSuccess={setIsSuccess} isSuccess={isSuccess} />
            </div>
        </div>
    );
};

CustomModal.propTypes = {
    isOpen: PropTypes.bool.isRequired,
    close: PropTypes.func.isRequired,
    className: PropTypes.string,
    title: PropTypes.string,
    type: PropTypes.string.isRequired,
};

CustomModal.defaultProps = {
    className: '',
    title: '',
    type: 'default',
};

export default CustomModal;
