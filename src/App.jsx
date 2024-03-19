import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header1 from './Sections/Header1/Header1';
import FirstPage from './Pages/FisrtPage/FirstPage';
import Footer from './Sections/Footer/Footer';
import IndexJSX from './Sections/Vacancies';

function App() {
    return (
        <div className="div">
            <Header1 />
            <Routes>
                <Route path="/" element={<FirstPage />} />
                <Route path="/Vacancies" element={<IndexJSX />} />
            </Routes>
            <Footer />
        </div>
    );
}

export default App;
