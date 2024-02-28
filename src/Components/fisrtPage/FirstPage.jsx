import Aboniment from '../../Pages/Aboniment/Aboniment'
import AboutUs from '../../Pages/AboutUs/AboutUs'
import Advantages from '../../Pages/Advantages/Advantages'
import FAQ from '../../Pages/FAQ/FAQ'
import Home1 from '../../Pages/Home1/Home1'
import Section from '../../Pages/SectionTriatlon/Section'
import TrainingZones from '../../Pages/TrainingZones/TrainingZones'
import { Coaches } from '../coaches'

const FisrtPage = () => {
    return (
        <div>
            <Home1/>
            <AboutUs/>
            <Advantages/>
            <Aboniment/>
            <Section/>
            <Coaches/>
            <TrainingZones/>
            <FAQ/>
        </div>
    )
}

export default FisrtPage