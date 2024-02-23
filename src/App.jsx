import { Route, Routes } from 'react-router-dom'
import './App.scss'
import Services from './Pages/Services/Services'
import Subscrition from './Pages/Subscrition/Subscrition'
import Trainers from './Pages/Trainers/Trainers'
import Schedule from './Pages/Schedule/Schedule'
import Contacts from './Pages/Contacts/Contacts'
import FirstSection from './Pages/FirstSection/FirstSection'
import Header from './Pages/Header/Header'
import AboutUs from './Components/AboutUs/AboutUs'

function App() {
    return (
        <div className="div">
        
               
            <Header/>

            <Routes>
                <Route path='/' element={<FirstSection/>}> 

                </Route>
                
                <Route path='/aboutUs' element={<AboutUs/>}/>
                <Route path='/subscrition' element={<Subscrition/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/trainers' element={<Trainers/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                
            
            </Routes>
        </div>
    )
}

export default App
