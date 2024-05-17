import Advantages from '@sections/Advantages/Advantages'
import Coaches from '@sections/Coaches'
import Feedback from '@sections/CustomerReviews'
import FAQ from '@sections/FAQ/FAQ'
import Location from '@sections/Location/Location'
import SectionTriatlon from '@sections/SectionTriatlon/SectionTriatlon'
import TrainingAreas from '@sections/TrainingAreas'
import { Hero, AboutUs, Subscription, OurServices } from '@sections'

export const HomePage = () => {
    return (
        <>
            <Hero />
            <AboutUs />
            <Advantages />
            <Subscription />
            <SectionTriatlon />
            <Coaches />
            <TrainingAreas />
            <OurServices />
            <Feedback />
            <FAQ />
            <Location />
        </>
    )
}
