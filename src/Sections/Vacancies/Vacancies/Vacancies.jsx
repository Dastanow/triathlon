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
        setOpenIndex(openIndex === index ? null : index); };

    const [modalActive, setModalActive] = useState(false)
    const {vacancyClass} = initStateVacancyForm
    return(
        <div className="blocks" id="YesVacancies">
            <h2>Вакансии</h2>
            {VacanciesData.map((el, index) => (
                <div className="blockk" key={index}>
                    <h4 className="blockk--vacancies" onClick={() => handleToggle(index)} > 
                        {el.zgolovok}
                        <span >
                            <IoIosArrowForward className={
                                openIndex === index ? 'rotate' : ''
                            } />
                        </span>
                    </h4>
                    {openIndex === index && (
                        <div className="blockk--content">
                            <p>{el.title}</p>
                            <div>
                                <h3>Требуется: </h3>
                                <p>{el.requirements}</p>
                            </div>
                            <div>
                                <h3>Предлагаем:</h3>
                                <p>{el.offer}</p>
                            </div>
                            <div>
                                <h3>Условия: </h3>
                                <p>{el.conditions}</p>
                            </div>
                            <button className="blockk--content__button-vacancy" onClick={() => setModalActive(true)}>Отправить резюме</button>
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

export default Vacancies