import  { useEffect, useState } from 'react';
import { EmptyBlock ,Vacancies, VacanciesData } from '@sections';


export const VacanciesPage = () => {
    const [hasVacancies, setHasVacancies] = useState(false);

    useEffect(() => {
        const checkForVacancies = () => {
            if (Array.isArray(VacanciesData) && VacanciesData.length > 0) {
                setHasVacancies(true);
            }
        };
        checkForVacancies();
    }, []);

    return (
        <>
            {hasVacancies ? <Vacancies vacanciesData={VacanciesData} /> : <EmptyBlock/>}
        </>
    );
};