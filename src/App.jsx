import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Header1 from './Pages/Header1/Header1'
// import Home1 from './Pages/Home1/Home1'
import FisrtPage from './Components/fisrtPage/FirstPage'

function App() {
    return (
        <div className="div">
            <Header1/>
            <Routes>
                <Route path="/" element={<FisrtPage/>} />
            </Routes>
        </div>
    )
}

export default App
