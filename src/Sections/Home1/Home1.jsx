import './style.scss';
import wp from '../../Assets/wp1.png';
import ModaleWindow from '../../Modules/ModaleWindow';
import { useState } from 'react';
import ApplicationForm from '../../Modules/ApplicationForm/ApplicationForm';

const Home1 = () => {
    const [modalActive, setModalActive] = useState(false)

    return (
        <div className="home">
            <div className="home__menu">
                <h1 className="home__title">TRIATHLON CENTER</h1>
                <p className="home__text">
                    Первая инклюзивная спортивная база в Кыргызской Республике
                </p>
                <div className="home--menu_btn">
                    <button  onClick={() => setModalActive(true)} className="btn">Оставить заявку</button>
                </div>
                <ModaleWindow active={modalActive} setActive={setModalActive}>
                    <ApplicationForm/>
                </ModaleWindow>  
                <div className="whatapp">
                    <a href="https://api.whatsapp.com/send/?phone=996227000180&type=phone_number&app_absent=0&fbclid=PAAaY_5bq244tz8NBMZByR5gZH5QOPPnwqjB2n58ehJl3PUjGfA57gTD3vBKw_aem_AT59MfZLMHLdpFec1QkPFlU_LqH-cBOTMTSLfwbadUyszfb7PcECLptkeZoEOPpWcHE">
                        <img src={wp} alt="img" />
                    </a>
                </div>
            </div>
        </div>
    );
};

export default Home1;
