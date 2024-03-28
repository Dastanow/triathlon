import { useState } from 'react';
import './style.scss'
import VacanciesData from './VacanciesFakeData.json' 
import { IoIosArrowForward } from 'react-icons/io';
import ModaleWindow from '../../../Modules/ModaleWindow';
import VacancyForm from '../../../Modules/VacancyForm/VacancyForm';

const Vacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); };

    const [modalActive, setModalActive] = useState(false)

    return(
        <div className="blocks" id="YesVacancies">
            <h2>Вакансии</h2>
            {VacanciesData.map((el, index) => (
                <div className="blockk" key={index} onClick={() => handleToggle(index)}>
                    <h4 className="blockk--vacancies" > 
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
                            <button className="btn" onClick={() => setModalActive(true)}>Отправить резюме</button>
                            <ModaleWindow active={modalActive} setActive={setModalActive}>
                                <VacancyForm/>
                            </ModaleWindow> 
                        </div>
                    )}
                </div>
            ))}
        </div>
    )
}

export default Vacancies