import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import { HomePage, VacanciesPage, NotFoundPage, AdminPage, SchedulePage } from '@pages';

const Routing = () => {
    return (
        <Routes>
            <Route path="/" element={<Layout/>}>
                <Route index element={<HomePage/>}/>
                <Route path="vacancies" element={<VacanciesPage />} />
            </Route>
            <Route path="schedule" element={<SchedulePage/>} />
            <Route path="personal-account" element={<AdminPage/>} />
            <Route path="*" element={<NotFoundPage/>} />
        </Routes>
    )
}

export default Routing