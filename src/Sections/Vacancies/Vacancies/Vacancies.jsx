import { useState } from 'react';
import './Vacancies.scss'
import VacanciesData from './VacanciesFakeData.json' 
import { IoIosArrowForward } from 'react-icons/io';
import ModalWindow from '../../../Modules/ModalWindow';
import CustomForm from '../../../UI/CustomForm/CustomForm';
import { initStateVacancyForm } from '../../../common/constants';

const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    const [modalActive, setModalActive] = useState(false)
    const {vacancyClass} = initStateVacancyForm

    return(
        <div className="vacancies-blocks" id="YesVacancies">
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
        </div>
    )
}

export default Vacancies;
