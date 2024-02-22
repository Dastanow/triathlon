import { Route, Routes } from 'react-router-dom'

import Services from './Pages/Services/Services'
import Subscrition from './Pages/Subscrition/Subscrition'
import Trainers from './Pages/Trainers/Trainers'
import Schedule from './Pages/Schedule/Schedule'
import Contacts from './Pages/Contacts/Contacts'
import Layout from './Pages/FirstSection/FirstSection'

function App() {
    return (
        <>
        

            <Layout/>

            <Routes>
                <Route path='/' > 
                
                <Route path='/subscrition' element={<Subscrition/>}/>
                <Route path='/services' element={<Services/>}/>
                <Route path='/trainers' element={<Trainers/>}/>
                <Route path='/schedule' element={<Schedule/>}/>
                <Route path='/contacts' element={<Contacts/>}/>
                </Route>
            
            </Routes>
        </>
    )
}

export default App
