import './HeroBlock.scss';
import ModaleWindow from '../../Modules/ModalWindow';
import { useState } from 'react';
import CustomForm from '../../UI/CustomForm/CustomForm';
import CustomButton from '../../UI/CustomButton/CustomButton';
import { initStateAppForm } from '../../common/constants';

const HeroBlock = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="hero">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-content--title">TRIATHLON CENTER</h1>
                    <p className="hero-content--description">Первая инклюзивная спортивная база в Кыргызской Республике</p>
                    <CustomButton type="secondary" onClick={() => setModalActive(true)}>
                        Оставить заявку
                    </CustomButton>
                </div>
            </div>
            <ModaleWindow active={modalActive} setActive={setModalActive}>
                <CustomForm
                    {... initStateAppForm}
                />
            </ModaleWindow>
        </section>
    );
};

export default HeroBlock;
