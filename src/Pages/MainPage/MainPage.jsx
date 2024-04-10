import Aboniment from '../../Sections/Aboniment/Aboniment';
import AboutUs from '../../Sections/AboutUs/AboutUs';
import Advantages from '../../Sections/Advantages/Advantages';
import Coaches from '../../Sections/Coaches';
import Feedback from '../../Sections/CustomerReviews';
import FAQ from '../../Sections/FAQ/FAQ';
import HeroBlock from '../../Sections/HeroBlock/HeroBlock';
import Location from '../../Sections/Location/Location';
import OurServices from '../../Sections/OurServices/OurServices';
import SectionTriatlon from '../../Sections/SectionTriatlon/SectionTriatlon';
import TrainingAreas from '../../Sections/TrainingAreas';

const MainPage = () => {
    return (
        <>
            <HeroBlock/>
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

export default MainPage;
