import Aboniment from '../../Sections/Aboniment/Aboniment';
import AboutUs from '../../Sections/AboutUs/AboutUs';
import Advantages from '../../Sections/Advantages/Advantages';
import Coaches from '../../Sections/Coaches';
import FAQ from '../../Sections/FAQ/FAQ';
import Feedback from '../../Sections/Feedback';
// import Footer from '../../Sections/Footer/Footer'
import Home1 from '../../Sections/Home1/Home1';
import OurServices from '../../Sections/OurServices/OurServices';
import Section from '../../Sections/SectionTriatlon/Section';
import TrainingAreas from '../../Sections/TrainingAreas';

const FirstPage = () => {
    return (
        <div>
            <Home1 />
            <AboutUs />
            <Advantages />
            <Aboniment />
            <Section />
            <Coaches />
            <TrainingAreas />
            <OurServices />
            <Feedback />
            <FAQ />
        </div>
    );
};

export default FirstPage;
