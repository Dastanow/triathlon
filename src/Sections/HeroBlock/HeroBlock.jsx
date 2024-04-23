import './HeroBlock.scss';
import ModalWindow from '../../Modules/ModalWindow';
import { useState } from 'react';
import CustomForm from '../../UI/CustomForm/CustomForm';
import CustomButton from '../../UI/CustomButton/CustomButton';
import { initStateAppForm } from '../../common/constants';
import { useTranslation } from 'react-i18next';

const HeroBlock = () => {
    const {t} = useTranslation();
    const [modalActive, setModalActive] = useState(false)
    return (
        <section className="hero" id="main">
            <div className="container">
                <div className="hero-content">
                    <h1 className="hero-content--title">TRIATHLON CENTER</h1>
                    <p className="hero-content--description">Первая инклюзивная спортивная база в Кыргызской Республике</p>
                    <CustomButton type="secondary" onClick={() => setModalActive(true)}>
                        {t('buttonHero')}
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
