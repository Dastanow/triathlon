import './HeroBlock.scss';
import wp from '../../Assets/wp1.png';
import ModaleWindow from '../../Modules/ModalWindow';
import { useState } from 'react';



const HeroBlock = () => {
    const [modalActive, setModalActive] = useState(false)
<<<<<<< HEAD
=======
    const ScrollToTop = () => {  
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        });
    };
    
    
>>>>>>> 84a4b7f0ee0e016dad491a2a5eb90a721773e200
    return (
        <div className="main_unit_home">
            <div className="block">
                <div className="menu">
                    <h1 className="title">TRIATHLON CENTER</h1>

                    <p className="text">
                    Первая инклюзивная спортивная база в Кыргызской Республике
<<<<<<< HEAD
                </p>
                <div className="menu_btn">
                    <button  onClick={() => setModalActive(true)} className="btn">Оставить заявку</button>
                </div>
=======
                    </p>

                    <div className="menu_btn">
                        <button  onClick={() => setModalActive(true)} className="btn">Оставить заявку</button>
                    </div>
>>>>>>> 84a4b7f0ee0e016dad491a2a5eb90a721773e200

                    <ModaleWindow active={modalActive} setActive={setModalActive}/> 

<<<<<<< HEAD
               
=======
                    <Link to="/" onClick={ScrollToTop}>
                        <img className="theTop" src={arrow} alt="" />
                    </Link>

                    <div className="whatapp">
                        <a target="_blank" href="https://api.whatsapp.com/send/?phone=996227000180&type=phone_number&app_absent=0&fbclid=PAAaY_5bq244tz8NBMZByR5gZH5QOPPnwqjB2n58ehJl3PUjGfA57gTD3vBKw_aem_AT59MfZLMHLdpFec1QkPFlU_LqH-cBOTMTSLfwbadUyszfb7PcECLptkeZoEOPpWcHE">
                            <img src={wp} alt="" />
                        </a>
                    </div>
>>>>>>> 84a4b7f0ee0e016dad491a2a5eb90a721773e200

                </div>

            </div>
        </div>
    );
};

export default HeroBlock;
<<<<<<< HEAD

=======
>>>>>>> 84a4b7f0ee0e016dad491a2a5eb90a721773e200
