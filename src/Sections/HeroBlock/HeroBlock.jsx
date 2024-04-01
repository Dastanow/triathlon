// import React from 'react';
import './HeroBlock.scss';
import arrow from '../../Assets/ToTheTop.png'
import wp from '../../Assets/wp1.png';
import ModaleWindow from '../../Modules/ModaleWindow';
import { useState } from 'react';
import { Link } from 'react-router-dom'



const Home = () => {
    const [modalActive, setModalActive] = useState(false)
    const ScrollToTop = () => {  
        window.scrollTo({
          top: 0,
          behavior: "smooth"
        });
      };
    
    
    return (
        <div className="main_unit_home">
        <div className="block">
            <div className="menu">
                <h1 className="title">TRIATHLON CENTER</h1>

                <p className="text">
                    Первая инклюзивная спортивная база в Кыргызской Республике
                </p>

                <div className="menu_btn">
                    <button  onClick={() => setModalActive(true)} className="btn">Оставить заявку</button>
                </div>

                <ModaleWindow active={modalActive} setActive={setModalActive}/> 

                <Link to="/" onClick={ScrollToTop}>
                    <img className="theTop" src={arrow} alt="" />
                </Link>

                <div className="whatapp">
                    <a target='_blank' href="https://api.whatsapp.com/send/?phone=996227000180&type=phone_number&app_absent=0&fbclid=PAAaY_5bq244tz8NBMZByR5gZH5QOPPnwqjB2n58ehJl3PUjGfA57gTD3vBKw_aem_AT59MfZLMHLdpFec1QkPFlU_LqH-cBOTMTSLfwbadUyszfb7PcECLptkeZoEOPpWcHE">
                        <img src={wp} alt="" />
                    </a>
                </div>

            </div>

        </div>
        </div>
    );
};

export default Home;
