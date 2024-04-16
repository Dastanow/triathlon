import './HeroBlock.scss';
import ModalWindow from '../../Modules/ModalWindow';
import { useState } from 'react';
import { CustomButton, CustomForm } from '@ui';
import { initStateAppForm } from '../../Shared/constants';

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
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <CustomForm
                    {... initStateAppForm}
                />
            </ModalWindow>
        </section>
    );
};

export default HeroBlock;
