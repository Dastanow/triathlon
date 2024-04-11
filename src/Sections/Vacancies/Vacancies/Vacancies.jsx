import { useState } from 'react';
import './Vacancies.scss'
import VacanciesData from './VacanciesFakeData.json' 
import { IoIosArrowForward } from 'react-icons/io';
import ModalWindow from '../../../Modules/ModalWindow';
import CustomForm from '../../../UI/CustomForm/CustomForm';
import { initStateVacancyForm } from '../../../common/constants';
import Container from '../../../Components/Container/Container';
import CustomTitle from '../../../UI/CustomTitle/CustomTitle';
import CustomButton from '../../../UI/CustomButton/CustomButton';

const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [modalActive, setModalActive] = useState(false)
    const {vacancyClass} = initStateVacancyForm

    return(
        <section className="vacancies" id="vacancies">
            <Container classNames="vacanciesContainer">
                <CustomTitle title={"Вакансии"} />
                <div className="vacanciesList">
                    {VacanciesData.map((vacancie, index) => (
                        <div className="vacanciesItem" key={index}>
                            <h5 className="vacanciesTitle" onClick={() => handleToggle(index)}>
                                {vacancie.zgolovok}
                                <span className="vacanciesArrow">
                                    <IoIosArrowForward className={
                                        openIndex === index ? 'openArrow' : 'closeArrow'
                                    } />
                                </span>
                            </h5>
                            {openIndex === index && (
                                <div className="vacanciesContent">
                                    <p className="vacanciesDescription">{vacancie.title}</p>
                                    <div className="vacancies-requirements">
                                        <h3 className="vacancies-subtitle">Требуется: </h3>
                                        <p>{vacancie.requirements}</p>
                                    </div>
                                    <div className="vacancies-offer">
                                        <h3 className="vacancies-subtitle">Предлагаем:</h3>
                                        <p>{vacancie.offer}</p>
                                    </div>
                                    <div className="vacancies-conditions">
                                        <h3 className="vacancies-subtitle">Условия: </h3>
                                        <p>{vacancie.conditions}</p>
                                    </div>
                                    <CustomButton className="vacancieButton" type="primary" onClick={() => setModalActive(true)}>Отправить резюме</CustomButton>
                                </div>
                            )}
                        </div>
                    ))}
                </div>
            </Container>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <CustomForm 
                    classes={vacancyClass}
                    {... initStateVacancyForm}
                />
            </ModalWindow> 
        </section>
    )
}

export default Vacancies;


{/* <div className="vacancies-blocks" id="YesVacancies">
    <h2 className="vacancies-title">Вакансии</h2>
    {VacanciesData.map((el, index) => (
        <div className="vacancies-block" key={index}>
            <h4 className="vacancies-header" onClick={() => handleToggle(index)} > 
                {el.zgolovok}
                <span className="vacancies-arrow">
                    <IoIosArrowForward className={
                        openIndex === index ? 'openArrow' : 'closeArrow'
                    } />
                </span>
            </h4>
            {openIndex === index && (
                <div className="vacancies-content">
                    <p className="vacancies-description">{el.title}</p>
                    <div className="vacancies-requirements">
                        <h3 className="vacancies-subtitle">Требуется: </h3>
                        <p>{el.requirements}</p>
                    </div>
                    <div className="vacancies-offer">
                        <h3 className="vacancies-subtitle">Предлагаем:</h3>
                        <p>{el.offer}</p>
                    </div>
                    <div className="vacancies-conditions">
                        <h3 className="vacancies-subtitle">Условия: </h3>
                        <p>{el.conditions}</p>
                    </div>
                    <button className="vacancies-button" onClick={() => setModalActive(true)}>Отправить резюме</button>
                    <ModalWindow active={modalActive} setActive={setModalActive}>
                        <CustomForm 
                            classes={vacancyClass}
                            {... initStateVacancyForm}
                        />
                    </ModalWindow> 
                </div>
            )}
        </div>
    ))}
</div> */}