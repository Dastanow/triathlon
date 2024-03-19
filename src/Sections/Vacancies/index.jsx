import  { useEffect, useState } from 'react';
import YesVacancies from './YesVacancies/YesVacancies';
import NoVacancies from './NoVacancies/NoVacancies'
import vacanciesData from './YesVacancies/VacanciesFakeData.json'; 

const IndexJSX = () => {
    const [hasVacancies, setHasVacancies] = useState(false);

    useEffect(() => {
        const checkForVacancies = () => {
            if (Array.isArray(vacanciesData) && vacanciesData.length > 0) {
                setHasVacancies(true);
            }
        };
        checkForVacancies();
    }, []);

    return (
        <div>
            {hasVacancies ? <YesVacancies vacanciesData={vacanciesData} /> : <NoVacancies/>}
        </div>
    );
};

export default IndexJSX;
