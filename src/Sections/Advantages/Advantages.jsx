import './Advantages.scss';
import AdvantagesData from './AdvanFakeData.json';
import { CustomTitle } from '@ui';
import { Container } from '@components';
import { useTranslation } from 'react-i18next';

const Advantages = () => {
    const {t} = useTranslation();
    return (
        <section id="advantages" className="advantages">
            <Container classNames="advantagesContainer">
                <CustomTitle title={t('advantages')}/>
                <div className="advantagesWrapper">
                    {AdvantagesData.map((advantage) => (
                        <div className="advantagesItem" key={advantage.id}>
                            <img src={advantage.image} alt="img" />
                            <p>{t(advantage.discription)}</p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
};

export default Advantages;