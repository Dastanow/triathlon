
import { useState } from 'react';
import './Vacancies.scss';
import VacanciesData from './VacanciesFakeData.json';
import { IoIosArrowDown } from 'react-icons/io'
import ModalWindow from '@modules/ModalWindow';
import { CustomButton, CustomTitle} from '@ui';
import { Container } from '@components';
import VacancyForm from '@/UI/CustomForm/VacancyForm/VacancyForm';

export const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null)

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index)
    }

    const [modalActive, setModalActive] = useState(false)

    return (
        <section className="vacancies" id="vacancies">
            <Container classNames="vacanciesContainer">
                <CustomTitle title={'Вакансии'} />
                <div className="vacanciesList">
                    {VacanciesData.map((vacancie, index) => (
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
                                        {vacancie.zgolovok}
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
                                    <p className="vacanciesDescription">
                                        {vacancie.title}
                                    </p>
                                    <div className="vacancies-requirements">
                                        <h3 className="vacancies-subtitle">
                                            Требуется:{' '}
                                        </h3>
                                        <p>{vacancie.requirements}</p>
                                    </div>
                                    <div className="vacancies-offer">
                                        <h3 className="vacancies-subtitle">
                                            Предлагаем:
                                        </h3>
                                        <p>{vacancie.offer}</p>
                                    </div>
                                    <div className="vacancies-conditions">
                                        <h3 className="vacancies-subtitle">
                                            Условия:{' '}
                                        </h3>
                                        <p>{vacancie.conditions}</p>
                                    </div>
                                </div>
                                <CustomButton
                                    className="vacanciesButton"
                                    type="primary"
                                    onClick={() => setModalActive(true)}>
                                    Отправить резюме
                                </CustomButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <VacancyForm/>
            </ModalWindow>
        </section>
    )
}

export default Vacancies
