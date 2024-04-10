import './HeroBlock.scss';
import wp from '../../Assets/wp1.png';
import ModaleWindow from '../../Modules/ModalWindow';
import { useState } from 'react';



const HeroBlock = () => {
    const [modalActive, setModalActive] = useState(false)
    const ScrollToTop = () => {  
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
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

               

                </div>

            </div>
        </div>
    );
};

export default HeroBlock;
