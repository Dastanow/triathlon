import './ModalWindow.scss';
import modalSvg from '../Assets/modalka.svg';
import PropTypes from 'prop-types'

const ModalWindow = ({ active, setActive, children }) => {

    return (
        <div>
            <div
                className={active ? 'modal active' : 'modal'}
                onClick={() => setActive(false)}
            >
                <div
                    className={active ? 'modal__content active' : 'modal__content'}
                    onClick={(e) => e.stopPropagation()}
                >
                    <img
                        src={modalSvg}
                        onClick={() => setActive(false)}
                        className="modal-blockk__cross"
                        alt="reset"
                    />

                    {children}
                    
                </div>
            </div>
            
        </div>
    );
};

ModalWindow.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.object,
};

export default ModalWindow;

