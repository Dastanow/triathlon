import { useState } from 'react';
import './style.scss'
import VacanciesData from './VacanciesFakeData.json' 
import { IoIosArrowForward } from 'react-icons/io';

const YesVacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <div id="YesVacancies">
            <div className="blocks">
                <h1>Вакансии</h1>

                {VacanciesData.map((el, index) => (
                    <div className="blockk" key={index}>
                        <h4 className="blockk--vacancies" onClick={() => handleToggle(index)} > 
                            {el.zgolovok}
                            <span>
                                <IoIosArrowForward/>
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
                                <button>Отправить резюме</button>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YesVacancies