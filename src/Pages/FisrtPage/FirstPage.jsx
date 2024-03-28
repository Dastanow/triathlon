import Aboniment from '../../Sections/Aboniment/Aboniment';
import AboutUs from '../../Sections/AboutUs/AboutUs';
import Advantages from '../../Sections/Advantages/Advantages';
import Coaches from '../../Sections/Coaches';
import FAQ from '../../Sections/FAQ/FAQ';
import Feedback from '../../Sections/Feedback';
import Home1 from '../../Sections/Home1/Home1';
import Location from '../../Sections/Location/Location';
import OurServices from '../../Sections/OurServices/OurServices';
import SectionTriatlon from '../../Sections/SectionTriatlon/SectionTriatlon';
import TrainingAreas from '../../Sections/TrainingAreas';

const FirstPage = () => {
    return (
        <>
            <Home1 />
            <AboutUs />
            <Advantages />
            <Aboniment />
            <SectionTriatlon />
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
