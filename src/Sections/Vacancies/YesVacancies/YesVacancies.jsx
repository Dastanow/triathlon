import { useState } from 'react';
import './style.scss'
import VacanciesData from './VacanciesFakeData.json' 

const YesVacancies = () => {
    const [openIndex, setOpenIndex] = useState(null);

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index);
    };
    return(
        <div id="YesVacancies">
            <h1>Вакансии</h1>
            <div className="blockk">
                {VacanciesData.map((el, index) => (
                    <div className="boks_questions" key={index}>
                        <h4
                            className="title_questions"
                            onClick={() => handleToggle(index)} > 
                            {el.title}
                        </h4>
                        {openIndex === index && (
                            <p>{el.requirements}</p>
                        )}
                    </div>
                ))}
            </div>
        </div>
    )
}

export default YesVacancies