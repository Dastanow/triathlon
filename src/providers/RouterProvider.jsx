import { Route, Routes } from 'react-router-dom'
import Layout from './Layout'
import FirstPage from '../Pages/MainPage/FirstPage'
import IndexJSX from '../Sections/Vacancies'
import PageNotFound from '../Pages/PageNotFound/PageNotFound'

const Routing = () => {
    return (
        <div className="routing--first__container">
            <Routes>
                <Route path="/" element={<Layout/>}>
                    <Route index element={<FirstPage/>}/>
                    <Route path="/vacancies" element={<IndexJSX />} />
                    <Route path="*" element={<PageNotFound/>} />
                </Route>
            </Routes>
        </div>
    )
}

export default Routing