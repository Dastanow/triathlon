import Aboniment from '../../Sections/Aboniment/Aboniment';
import AboutUs from '../../Sections/AboutUs/AboutUs';
import Advantages from '../../Sections/Advantages/Advantages';
import Coaches from '../../Sections/Coaches';
import FAQ from '../../Sections/FAQ/FAQ';
import Feedback from '../../Sections/Feedback';
import Home from '../../Sections/Home/Home';
import Location from '../../Sections/Location/Location';
import OurServices from '../../Sections/OurServices/OurServices';
import Section from '../../Sections/SectionTriatlon/Section';
import TrainingAreas from '../../Sections/TrainingAreas';

const FirstPage = () => {
    return (
        <>
            <Home />
            <AboutUs />
            <Advantages />
            <Aboniment />
            <Section />
            <Coaches />
            <TrainingAreas />
            <OurServices />
            <Feedback />
            <FAQ />
            <Location />
        </>
    );
};

export default FirstPage;
