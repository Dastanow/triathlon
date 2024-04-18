import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage, VacanciesPage, NotFoundPage } from '@pages';
import { AdminPage } from '@/Pages';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="/vacancies" element={<VacanciesPage />} />
                <Route path="/admin" element={<AdminPage />} />
                <Route path="*" element={<NotFoundPage/>} />
            </Route>
        </Routes>
    )
}

export default Routing