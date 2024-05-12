import { useState, useEffect } from 'react'
import './Vacancies.scss'
import { IoIosArrowDown } from 'react-icons/io'
import ModalWindow from '@modules/ModalWindow'
import { toggleModal } from '@/store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton, CustomTitle } from '@ui'
import PropTypes from 'prop-types'
import { Container } from '@components'
import VacancyForm from '@/UI/CustomForm/VacancyForm/VacancyForm'

export const Vacancies = ({ data }) => {
    const [openIndex, setOpenIndex] = useState(null)
    const [modalActive, setModalActive] = useState(false)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const modalState = useSelector((state) => state.modal.isActive)

    const dispatch = useDispatch()
    const handleOpenModal = () => {
        dispatch(toggleModal(true))
        setModalActive(true)
    }

    useEffect(() => {
        if (!modalState) {
            setModalActive(false)
        }
    }, [modalState])

    return (
        <section className="vacancies" id="vacancies">
            <Container classNames="vacanciesContainer">
                <CustomTitle title={'Вакансии'} />
                <div className="vacanciesList">
                    {data.map((vacancy, index) => (
                        <div className="vacanciesWrapper" key={index}>
                            <div
                                className={
                                    'vacanciesItem' +
                                    (openIndex === index
                                        ? ' vacanciesItem-opened'
                                        : '')
                                }>
                                <div
                                    className="vacanciesToggleField"
                                    onClick={() => handleToggle(index)}>
                                    <h5 className="vacanciesTitle">
                                        {vacancy.title}
                                    </h5>
                                    <span className="vacanciesArrow">
                                        <IoIosArrowDown
                                            className={
                                                openIndex === index
                                                    ? 'openArrow'
                                                    : 'closeArrow'
                                            }
                                        />
                                    </span>
                                </div>
                                <div className="vacanciesContent">
                                    <p
                                        className="vacanciesDescription"
                                        dangerouslySetInnerHTML={{
                                            __html: vacancy.desc,
                                        }}></p>
                                </div>
                                <CustomButton
                                    className="vacanciesButton"
                                    type="primary"
                                    onClick={() => handleOpenModal()}>
                                    Отправить резюме
                                </CustomButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            {modalActive && (
                <ModalWindow>
                    <VacancyForm />
                </ModalWindow>
            )}
        </section>
    )
}

Vacancies.propTypes = {
    data: PropTypes.array.isRequired,
}

export default Vacancies
