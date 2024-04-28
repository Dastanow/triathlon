import Aboniment from '@/Sections/Aboniment/Aboniment';
import Advantages from '../../Sections/Advantages/Advantages';
import Coaches from '../../Sections/Coaches';
import Feedback from '../../Sections/CustomerReviews';
import FAQ from '../../Sections/FAQ/FAQ';
import Location from '../../Sections/Location/Location';
import SectionTriatlon from '../../Sections/SectionTriatlon/SectionTriatlon';
import TrainingAreas from '../../Sections/TrainingAreas';
import { Hero, AboutUs, Subscription, OurServices } from '@sections';

export const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Advantages />
            <Aboniment/>
            <Subscription />
            <SectionTriatlon />
            <Coaches />
            <TrainingAreas />
            <OurServices/>
            <Feedback />
            <FAQ />
            <Location />
        </>
    );
};
