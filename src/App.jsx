import { Route, Routes } from 'react-router-dom';
import './App.scss';
import Header1 from './Sections/Header1/Header1';
// import Home1 from './Pages/Home1/Home1'
import FirstPage from './Pages/FisrtPage/FirstPage';

function App() {
    return (
        <div className="div">
            <Header1 />
            <Routes>
                <Route path="/" element={<FirstPage />} />
            </Routes>
        </div>
    );
}

export default App;
