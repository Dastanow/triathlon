import { useEffect, useState } from 'react';
import vacanciesData from './Vacancies/VacanciesFakeData.json';
import Vacancies from './Vacancies/Vacancies';
import EmptyBlock from './EmptyBlock/EmptyBlock';

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
        <>
            {hasVacancies ? (
                <Vacancies vacanciesData={vacanciesData} />
            ) : (
                <EmptyBlock />
            )}
        </>
    );
};

export default IndexJSX;
