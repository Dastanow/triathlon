import  { useEffect, useState } from 'react';
import { EmptyBlock ,Vacancies } from '@sections';
import { axiosAPI } from '@/App';
import { useTranslation } from 'react-i18next';


export const VacanciesPage = () => {
    const [hasVacancies, setHasVacancies] = useState(false);
    const { i18n } = useTranslation()
    const [data, setData] = useState([])

    const getData = async () => {
        const { data } = await axiosAPI.get('vacancy')
        setData(data)
    }
    
    useEffect(() => {
        getData()
    }, [i18n.language])

    useEffect(() => {
        const checkForVacancies = () => {
            if (Array.isArray(data) && data.length > 0) {
                setHasVacancies(true);
            }
        };
        checkForVacancies();
    }, [data]);

    return (
        <>
            {hasVacancies ? <Vacancies data={data} /> : <EmptyBlock/>}
        </>
    );
};