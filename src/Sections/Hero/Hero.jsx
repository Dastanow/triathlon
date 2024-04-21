import { useState } from 'react';
import { CustomButton, CustomForm } from '@ui';
import { Container } from '@components';
import { initStateAppForm } from '../../Shared/constants';
import ModalWindow from '../../Modules/ModalWindow';
import './Hero.scss';

export const Hero = () => {
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="hero" id="hero">
            <Container classNames="heroContainer">
                <div className="heroContent">
                    <h1 className="heroContentTitle">TRIATHLON CENTER</h1>
                    <p className="heroContentDescription">
                        Первая инклюзивная спортивная база в Кыргызской Республике
                    </p>
                    <CustomButton type="secondary" onClick={() => setModalActive(true)}>
                        Оставить заявку
                    </CustomButton>
                </div>
            </Container>
            <ModalWindow active={modalActive} setActive={setModalActive}>
                <CustomForm
                    {... initStateAppForm}
                />
            </ModalWindow>
        </section>
    );
};