import { useState } from 'react';
import './Vacancies.scss';
import VacanciesData from './VacanciesFakeData.json';
import { IoIosArrowUp } from 'react-icons/io';
import ModalWindow from '@modules/ModalWindow';
import { initStateVacancyForm } from '@shared/constants';
import { CustomButton, CustomForm, CustomTitle} from '@ui';
import { Container } from '@components';

export const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [modalActive, setModalActive] = useState(false);
    const { vacancyClass } = initStateVacancyForm;

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
                                }
                            >
                                <div
                                    className="vacanciesToggleField"
                                    onClick={() => handleToggle(index)}
                                >
                                    <h5 className="vacanciesTitle">
                                        {vacancie.zgolovok}
                                    </h5>
                                    <span className="vacanciesArrow">
                                        <IoIosArrowUp
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
                                    onClick={() => setModalActive(true)}
                                >
                                    Отправить резюме
                                </CustomButton>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <CustomForm classes={vacancyClass} {...initStateVacancyForm} />
            </ModalWindow>
        </section>
    );
};

export default Vacancies;
