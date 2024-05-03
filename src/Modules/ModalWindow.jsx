import './ModalWindow.scss'
import PropTypes from 'prop-types'
import { useDispatch } from 'react-redux'
import { useSelector } from 'react-redux'
import { toggleModal } from '@/store/modalSlice'

const ModalWindow = ({ children }) => {
    const dispatch = useDispatch()
    const handleCloseModal = () => {
        dispatch(toggleModal(false))
    }

    const modalState = useSelector((state) => state.modal.isActive)

    return (
        <div>
            <div
                className={modalState ? 'modal active' : 'modal'}
                onClick={() => handleCloseModal()}>
                <div
                    className={
                        modalState ? 'modal__content active' : 'modal__content'
                    }
                    onClick={(e) => e.stopPropagation()}>
                    {children}
                </div>
            </div>
        </div>
    )
}

ModalWindow.propTypes = {
    active: PropTypes.bool,
    setActive: PropTypes.func,
    children: PropTypes.any,
}

export default ModalWindow
