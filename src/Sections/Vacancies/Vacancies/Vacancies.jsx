import { useState, useEffect } from 'react'
import './Vacancies.scss'
import { IoIosArrowDown } from 'react-icons/io'
import ModalWindow from '@modules/ModalWindow'
import { toggleModal } from '@/store/modalSlice'
import { useDispatch, useSelector } from 'react-redux'
import { CustomButton, CustomTitle } from '@ui'
import { Container } from '@components'
import VacancyForm from '@/UI/CustomForm/VacancyForm/VacancyForm'
import { axiosAPI } from '@/App'
import { useTranslation } from 'react-i18next'

export const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null)
    const [modalActive, setModalActive] = useState(false)
    const [data, setData] = useState([])
    const { i18n } = useTranslation()

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const getData = async () => {
        const { data } = await axiosAPI.get('vacancy')
        setData(data)
    }
    useEffect(() => {
        getData()
    }, [i18n.language])

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
                                    <p className="vacanciesDescription" dangerouslySetInnerHTML={{__html: vacancy.desc}}>
                                    </p>
                                    <div className="vacancies-requirements">
                                        <h3 className="vacancies-subtitle">
                                            Требования:
                                        </h3>
                                        <p>{vacancy.requirements}</p>
                                    </div>
                                    <div className="vacancies-offer">
                                        <h3 className="vacancies-subtitle">
                                            Предлагаем:
                                        </h3>
                                        <p>{vacancy.offer}</p>
                                    </div>
                                    <div className="vacancies-conditions">
                                        <h3 className="vacancies-subtitle">
                                            Условия:    
                                        </h3>
                                        <p>{vacancy.conditions}</p>
                                    </div>
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

export default Vacancies
