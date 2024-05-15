import { useEffect, useState } from 'react';
import { EmptyBlock, Vacancies } from '@sections';
import { axiosAPI } from '@/App';
import { useTranslation } from 'react-i18next';

export const VacanciesPage = () => {
    const [data, setData] = useState([]);
    const { i18n } = useTranslation();

    console.log(data);

    const getData = async () => {
        try {
            const { data } = await axiosAPI.get('vacancy');
            setData(data);
        } catch (e) {
            console.error(e);
        }
    };

    useEffect(() => {
        getData();
    }, [i18n.language]);

    return (
        <>
            {data.length !== 0 ? <Vacancies data={data} /> : <EmptyBlock />}
        </>
    );
};

export default VacanciesPage;