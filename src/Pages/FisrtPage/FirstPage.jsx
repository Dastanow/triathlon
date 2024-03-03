import Aboniment from '../../Sections/Aboniment/Aboniment'
import AboutUs from '../../Sections/AboutUs/AboutUs'
import Advantages from '../../Sections/Advantages/Advantages'
import { Coaches } from '../../Sections/Coaches'
import FAQ from '../../Sections/FAQ/FAQ'
import Feedback from '../../Sections/Feedback/Feedback'
import Footer from '../../Sections/Footer/Footer'
import Home1 from '../../Sections/Home1/Home1'
import OurServices from '../../Sections/OurServices/OurServices'
import Section from '../../Sections/SectionTriatlon/Section'
import TrainingZones from '../../Sections/TrainingZones/TrainingZones'

const FirstPage = () =>{
    return (
        <div>
            <Home1/>
            <AboutUs/>
            <Advantages/>
            <Aboniment/>
            <Section/>
            <Coaches/>
            <TrainingZones/>
            <OurServices/>
            <Feedback/>
            <FAQ/>
            <Footer/>
        </div>
    )
}

export default FirstPage